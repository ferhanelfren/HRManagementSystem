"use strict";
exports.__esModule = true;
exports.ExampleDataSource = exports.LeaveRequestsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var leaves_service_1 = require("./leaves.service");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var collections_1 = require("@angular/cdk/collections");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var menu_1 = require("@angular/material/menu");
var collections_2 = require("@angular/cdk/collections");
var form_component_1 = require("./form/form.component");
var delete_component_1 = require("./delete/delete.component");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var tableExportUtil_1 = require("src/app/shared/tableExportUtil");
var common_1 = require("@angular/common");
var LeaveRequestsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LeaveRequestsComponent, _super);
    function LeaveRequestsComponent(httpClient, dialog, leavesService, snackBar) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.dialog = dialog;
        _this.leavesService = leavesService;
        _this.snackBar = snackBar;
        _this.filterToggle = false;
        _this.displayedColumns = [
            'select',
            'img',
            'name',
            'type',
            'from',
            'leaveTo',
            'noOfDays',
            'status',
            'reason',
            'actions',
        ];
        _this.selection = new collections_2.SelectionModel(true, []);
        _this.contextMenuPosition = { x: '0px', y: '0px' };
        return _this;
    }
    LeaveRequestsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    LeaveRequestsComponent.prototype.refresh = function () {
        this.loadData();
    };
    LeaveRequestsComponent.prototype.addNew = function () {
        var _this = this;
        var tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        var dialogRef = this.dialog.open(form_component_1.FormComponent, {
            data: {
                leaves: this.leaves,
                action: 'add'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
            var _a;
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                (_a = _this.exampleDatabase) === null || _a === void 0 ? void 0 : _a.dataChange.value.unshift(_this.leavesService.getDialogData());
                _this.refreshTable();
                _this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
    };
    LeaveRequestsComponent.prototype.detailsCall = function (row) {
        this.dialog.open(form_component_1.FormComponent, {
            data: {
                leaves: row,
                action: 'details'
            },
            height: '80%',
            width: '45%'
        });
    };
    LeaveRequestsComponent.prototype.toggleStar = function (row) {
        console.log(row);
    };
    LeaveRequestsComponent.prototype.editCall = function (row) {
        var _this = this;
        this.id = row.id;
        var tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        var dialogRef = this.dialog.open(form_component_1.FormComponent, {
            data: {
                leaves: row,
                action: 'edit'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
            var _a;
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = (_a = _this.exampleDatabase) === null || _a === void 0 ? void 0 : _a.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // Then you update that record using data from dialogData (values you enetered)
                if (foundIndex !== undefined) {
                    if (_this.exampleDatabase !== undefined) {
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        _this.exampleDatabase.dataChange.value[foundIndex] =
                            _this.leavesService.getDialogData();
                        // And lastly refresh table
                        _this.refreshTable();
                        _this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
                    }
                }
            }
        });
    };
    LeaveRequestsComponent.prototype.deleteItem = function (row) {
        var _this = this;
        this.id = row.id;
        var tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        var dialogRef = this.dialog.open(delete_component_1.DeleteComponent, {
            height: '250px',
            width: '300px',
            data: row,
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
            var _a;
            if (result === 1) {
                var foundIndex = (_a = _this.exampleDatabase) === null || _a === void 0 ? void 0 : _a.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // for delete we use splice in order to remove single object from DataService
                if (foundIndex !== undefined && _this.exampleDatabase) {
                    _this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                    _this.refreshTable();
                    _this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
                }
            }
        });
    };
    LeaveRequestsComponent.prototype.refreshTable = function () {
        this.paginator._changePageSize(this.paginator.pageSize);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    LeaveRequestsComponent.prototype.isAllSelected = function () {
        var _a;
        var numSelected = this.selection.selected.length;
        var numRows = (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.renderedData.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    LeaveRequestsComponent.prototype.masterToggle = function () {
        var _this = this;
        var _a;
        this.isAllSelected()
            ? this.selection.clear()
            : (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.renderedData.forEach(function (row) {
                return _this.selection.select(row);
            });
    };
    LeaveRequestsComponent.prototype.removeSelectedRows = function () {
        var _this = this;
        var totalSelect = this.selection.selected.length;
        this.selection.selected.forEach(function (item) {
            var _a, _b;
            var index = (_a = _this.dataSource) === null || _a === void 0 ? void 0 : _a.renderedData.findIndex(function (d) { return d === item; });
            // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
            (_b = _this.exampleDatabase) === null || _b === void 0 ? void 0 : _b.dataChange.value.splice(index, 1);
            _this.refreshTable();
            _this.selection = new collections_2.SelectionModel(true, []);
        });
        this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
    };
    LeaveRequestsComponent.prototype.loadData = function () {
        var _this = this;
        this.exampleDatabase = new leaves_service_1.LeavesService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        this.subs.sink = rxjs_1.fromEvent(this.filter.nativeElement, 'keyup').subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    // export table data in excel file
    LeaveRequestsComponent.prototype.exportExcel = function () {
        // key name with space add in brackets
        var exportData = this.dataSource.filteredData.map(function (x) { return ({
            Name: x.name,
            'Leave Type': x.type,
            'Leave From': common_1.formatDate(new Date(x.from), 'yyyy-MM-dd', 'en') || '',
            'Leave To': common_1.formatDate(new Date(x.leaveTo), 'yyyy-MM-dd', 'en') || '',
            'No Of Days': x.noOfDays,
            Status: x.status,
            Reason: x.reason
        }); });
        tableExportUtil_1.TableExportUtil.exportToExcel(exportData, 'excel');
    };
    LeaveRequestsComponent.prototype.showNotification = function (colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], LeaveRequestsComponent.prototype, "paginator");
    tslib_1.__decorate([
        core_1.ViewChild(sort_1.MatSort, { static: true })
    ], LeaveRequestsComponent.prototype, "sort");
    tslib_1.__decorate([
        core_1.ViewChild('filter', { static: true })
    ], LeaveRequestsComponent.prototype, "filter");
    tslib_1.__decorate([
        core_1.ViewChild(menu_1.MatMenuTrigger)
    ], LeaveRequestsComponent.prototype, "contextMenu");
    LeaveRequestsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-leave-requests',
            templateUrl: './leave-requests.component.html',
            styleUrls: ['./leave-requests.component.scss']
        })
    ], LeaveRequestsComponent);
    return LeaveRequestsComponent;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.LeaveRequestsComponent = LeaveRequestsComponent;
var ExampleDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(ExampleDataSource, _super);
    function ExampleDataSource(exampleDatabase, paginator, _sort) {
        var _this = _super.call(this) || this;
        _this.exampleDatabase = exampleDatabase;
        _this.paginator = paginator;
        _this._sort = _sort;
        _this.filterChange = new rxjs_1.BehaviorSubject('');
        _this.filteredData = [];
        _this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        _this.filterChange.subscribe(function () { return (_this.paginator.pageIndex = 0); });
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () {
            return this.filterChange.value;
        },
        set: function (filter) {
            this.filterChange.next(filter);
        },
        enumerable: false,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this.exampleDatabase.dataChange,
            this._sort.sortChange,
            this.filterChange,
            this.paginator.page,
        ];
        this.exampleDatabase.getAllLeavess();
        return rxjs_1.merge.apply(void 0, tslib_1.__spreadArray([], tslib_1.__read(displayDataChanges))).pipe(operators_1.map(function () {
            // Filter data
            _this.filteredData = _this.exampleDatabase.data
                .slice()
                .filter(function (leaves) {
                var searchStr = (leaves.name +
                    leaves.leaveTo +
                    leaves.type +
                    leaves.from +
                    leaves.status +
                    leaves.reason).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this.paginator.pageIndex * _this.paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this.paginator.pageSize);
            return _this.renderedData;
        }));
    };
    ExampleDataSource.prototype.disconnect = function () {
        //disconnect
    };
    /** Returns a sorted copy of the database data. */
    ExampleDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var _a, _b, _c, _d, _e, _f;
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = tslib_1.__read([a.id, b.id], 2), propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'name':
                    _b = tslib_1.__read([a.name, b.name], 2), propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'type':
                    _c = tslib_1.__read([a.type, b.type], 2), propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'leaveTo':
                    _d = tslib_1.__read([a.leaveTo, b.leaveTo], 2), propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'status':
                    _e = tslib_1.__read([a.status, b.status], 2), propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'reason':
                    _f = tslib_1.__read([a.reason, b.reason], 2), propertyA = _f[0], propertyB = _f[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1));
        });
    };
    return ExampleDataSource;
}(collections_1.DataSource));
exports.ExampleDataSource = ExampleDataSource;
//# sourceMappingURL=leave-requests.component.js.map