"use strict";
exports.__esModule = true;
exports.ExampleDataSource = exports.CandidatesComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var candidates_service_1 = require("./candidates.service");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var collections_1 = require("@angular/cdk/collections");
var menu_1 = require("@angular/material/menu");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var form_dialog_component_1 = require("./dialogs/form-dialog/form-dialog.component");
var delete_component_1 = require("./dialogs/delete/delete.component");
var collections_2 = require("@angular/cdk/collections");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var tableExportUtil_1 = require("src/app/shared/tableExportUtil");
var CandidatesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CandidatesComponent, _super);
    function CandidatesComponent(httpClient, dialog, candidatesService, snackBar) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.dialog = dialog;
        _this.candidatesService = candidatesService;
        _this.snackBar = snackBar;
        _this.displayedColumns = [
            'select',
            'img',
            'name',
            'email',
            'mobile',
            'title',
            'role',
            'jobType',
            'download',
            'actions',
        ];
        _this.selection = new collections_2.SelectionModel(true, []);
        _this.contextMenuPosition = { x: '0px', y: '0px' };
        return _this;
    }
    CandidatesComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    CandidatesComponent.prototype.refresh = function () {
        this.loadData();
    };
    CandidatesComponent.prototype.addNew = function () {
        var _this = this;
        var tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        var dialogRef = this.dialog.open(form_dialog_component_1.FormDialogComponent, {
            data: {
                candidates: this.candidates,
                action: 'add'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
            var _a;
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                (_a = _this.exampleDatabase) === null || _a === void 0 ? void 0 : _a.dataChange.value.unshift(_this.candidatesService.getDialogData());
                _this.refreshTable();
                _this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
    };
    CandidatesComponent.prototype.editCall = function (row) {
        var _this = this;
        this.id = row.id;
        var tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        var dialogRef = this.dialog.open(form_dialog_component_1.FormDialogComponent, {
            data: {
                candidates: row,
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
                if (foundIndex && _this.exampleDatabase) {
                    _this.exampleDatabase.dataChange.value[foundIndex] =
                        _this.candidatesService.getDialogData();
                    // And lastly refresh table
                    _this.refreshTable();
                    _this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
                }
            }
        });
    };
    CandidatesComponent.prototype.deleteItem = function (i, row) {
        var _this = this;
        this.index = i;
        this.id = row.id;
        var tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        var dialogRef = this.dialog.open(delete_component_1.DeleteDialogComponent, {
            height: '250px',
            width: '350px',
            data: row,
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
            var _a;
            if (result === 1) {
                var foundIndex = (_a = _this.exampleDatabase) === null || _a === void 0 ? void 0 : _a.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // for delete we use splice in order to remove single object from DataService
                if (foundIndex && _this.exampleDatabase) {
                    _this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                    _this.refreshTable();
                    _this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
                }
            }
        });
    };
    CandidatesComponent.prototype.refreshTable = function () {
        this.paginator._changePageSize(this.paginator.pageSize);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    CandidatesComponent.prototype.isAllSelected = function () {
        var _a;
        var numSelected = this.selection.selected.length;
        var numRows = (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.renderedData.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    CandidatesComponent.prototype.masterToggle = function () {
        var _this = this;
        var _a;
        this.isAllSelected()
            ? this.selection.clear()
            : (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.renderedData.forEach(function (row) {
                return _this.selection.select(row);
            });
    };
    CandidatesComponent.prototype.removeSelectedRows = function () {
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
    CandidatesComponent.prototype.loadData = function () {
        var _this = this;
        this.exampleDatabase = new candidates_service_1.CandidatesService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        this.subs.sink = rxjs_1.fromEvent(this.filter.nativeElement, 'keyup').subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    // export table data in excel file
    CandidatesComponent.prototype.exportExcel = function () {
        // key name with space add in brackets
        var exportData = this.dataSource.filteredData.map(function (x) { return ({
            Name: x.name,
            Email: x.email,
            Mobile: x.mobile,
            'Job Title': x.title,
            Role: x.role,
            'Job Type': x.jobType
        }); });
        tableExportUtil_1.TableExportUtil.exportToExcel(exportData, 'excel');
    };
    CandidatesComponent.prototype.showNotification = function (colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    };
    // context menu
    CandidatesComponent.prototype.onContextMenu = function (event, item) {
        event.preventDefault();
        this.contextMenuPosition.x = event.clientX + 'px';
        this.contextMenuPosition.y = event.clientY + 'px';
        if (this.contextMenu !== undefined && this.contextMenu.menu !== null) {
            this.contextMenu.menuData = { item: item };
            this.contextMenu.menu.focusFirstItem('mouse');
            this.contextMenu.openMenu();
        }
    };
    tslib_1.__decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], CandidatesComponent.prototype, "paginator");
    tslib_1.__decorate([
        core_1.ViewChild(sort_1.MatSort, { static: true })
    ], CandidatesComponent.prototype, "sort");
    tslib_1.__decorate([
        core_1.ViewChild('filter', { static: true })
    ], CandidatesComponent.prototype, "filter");
    tslib_1.__decorate([
        core_1.ViewChild(menu_1.MatMenuTrigger)
    ], CandidatesComponent.prototype, "contextMenu");
    CandidatesComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-candidates',
            templateUrl: './candidates.component.html',
            styleUrls: ['./candidates.component.scss']
        })
    ], CandidatesComponent);
    return CandidatesComponent;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.CandidatesComponent = CandidatesComponent;
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
        this.exampleDatabase.getAllCandidatess();
        return rxjs_1.merge.apply(void 0, tslib_1.__spreadArray([], tslib_1.__read(displayDataChanges))).pipe(operators_1.map(function () {
            // Filter data
            _this.filteredData = _this.exampleDatabase.data
                .slice()
                .filter(function (candidates) {
                var searchStr = (candidates.title +
                    candidates.email +
                    candidates.role +
                    candidates.jobType +
                    candidates.mobile +
                    candidates.name).toLowerCase();
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
            var _a, _b, _c, _d, _e;
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = tslib_1.__read([a.id, b.id], 2), propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'title':
                    _b = tslib_1.__read([a.title, b.title], 2), propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'mobile':
                    _c = tslib_1.__read([a.mobile, b.mobile], 2), propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'time':
                    _d = tslib_1.__read([a.email, b.email], 2), propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'name':
                    _e = tslib_1.__read([a.name, b.name], 2), propertyA = _e[0], propertyB = _e[1];
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
//# sourceMappingURL=candidates.component.js.map