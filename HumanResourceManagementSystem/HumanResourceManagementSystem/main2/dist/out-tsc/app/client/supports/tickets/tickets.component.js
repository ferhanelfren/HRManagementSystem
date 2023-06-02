"use strict";
exports.__esModule = true;
exports.ExampleDataSource = exports.TicketsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var collections_1 = require("@angular/cdk/collections");
var form_dialog_component_1 = require("./dialog/form-dialog/form-dialog.component");
var delete_component_1 = require("./dialog/delete/delete.component");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var collections_2 = require("@angular/cdk/collections");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var tickets_service_1 = require("./tickets.service");
var tableExportUtil_1 = require("src/app/shared/tableExportUtil");
var common_1 = require("@angular/common");
var TicketsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TicketsComponent, _super);
    function TicketsComponent(httpClient, dialog, ticketsService, snackBar) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.dialog = dialog;
        _this.ticketsService = ticketsService;
        _this.snackBar = snackBar;
        _this.displayedColumns = [
            'select',
            'ticket_id',
            'createdBy',
            'subject',
            'status',
            'assignTo',
            'date',
            'details',
            'actions',
        ];
        _this.selection = new collections_2.SelectionModel(true, []);
        return _this;
    }
    TicketsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    TicketsComponent.prototype.refresh = function () {
        this.loadData();
    };
    TicketsComponent.prototype.addNew = function () {
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
                ticket: this.ticket,
                action: 'add'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
            var _a;
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                (_a = _this.exampleDatabase) === null || _a === void 0 ? void 0 : _a.dataChange.value.unshift(_this.ticketsService.getDialogData());
                _this.refreshTable();
                _this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
    };
    TicketsComponent.prototype.editCall = function (row) {
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
                ticket: row,
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
                        _this.ticketsService.getDialogData();
                    // And lastly refresh table
                    _this.refreshTable();
                    _this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
                }
            }
        });
    };
    TicketsComponent.prototype.deleteItem = function (i, row) {
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
            height: '270px',
            width: '400px',
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
    TicketsComponent.prototype.refreshTable = function () {
        this.paginator._changePageSize(this.paginator.pageSize);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    TicketsComponent.prototype.isAllSelected = function () {
        var _a;
        var numSelected = this.selection.selected.length;
        var numRows = (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.renderedData.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    TicketsComponent.prototype.masterToggle = function () {
        var _this = this;
        var _a;
        this.isAllSelected()
            ? this.selection.clear()
            : (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.renderedData.forEach(function (row) {
                return _this.selection.select(row);
            });
    };
    TicketsComponent.prototype.removeSelectedRows = function () {
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
    TicketsComponent.prototype.loadData = function () {
        var _this = this;
        this.exampleDatabase = new tickets_service_1.TicketsService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        this.subs.sink = rxjs_1.fromEvent(this.filter.nativeElement, 'keyup').subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    // export table data in excel file
    TicketsComponent.prototype.exportExcel = function () {
        // key name with space add in brackets
        var exportData = this.dataSource.filteredData.map(function (x) { return ({
            'Ticket ID': x.ticket_id,
            'Created By': x.createdBy,
            Subject: x.subject,
            Status: x.status,
            'Assign To': x.assignTo,
            Date: common_1.formatDate(new Date(x.date), 'yyyy-MM-dd', 'en') || '',
            Details: x.details
        }); });
        tableExportUtil_1.TableExportUtil.exportToExcel(exportData, 'excel');
    };
    TicketsComponent.prototype.showNotification = function (colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], TicketsComponent.prototype, "paginator");
    tslib_1.__decorate([
        core_1.ViewChild(sort_1.MatSort, { static: true })
    ], TicketsComponent.prototype, "sort");
    tslib_1.__decorate([
        core_1.ViewChild('filter', { static: true })
    ], TicketsComponent.prototype, "filter");
    TicketsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-tickets',
            templateUrl: './tickets.component.html',
            styleUrls: ['./tickets.component.scss']
        })
    ], TicketsComponent);
    return TicketsComponent;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.TicketsComponent = TicketsComponent;
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
        this.exampleDatabase.getTicketss();
        return rxjs_1.merge.apply(void 0, tslib_1.__spreadArray([], tslib_1.__read(displayDataChanges))).pipe(operators_1.map(function () {
            // Filter data
            _this.filteredData = _this.exampleDatabase.data
                .slice()
                .filter(function (ticket) {
                var searchStr = (ticket.ticket_id +
                    ticket.createdBy +
                    ticket.subject +
                    ticket.status +
                    ticket.assignTo +
                    ticket.date +
                    ticket.details).toLowerCase();
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
            var _a, _b, _c, _d, _e, _f, _g;
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = tslib_1.__read([a.id, b.id], 2), propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'ticket_id':
                    _b = tslib_1.__read([a.ticket_id, b.ticket_id], 2), propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'createdBy':
                    _c = tslib_1.__read([a.createdBy, b.createdBy], 2), propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'subject':
                    _d = tslib_1.__read([a.subject, b.subject], 2), propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'status':
                    _e = tslib_1.__read([a.status, b.status], 2), propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'assignTo':
                    _f = tslib_1.__read([a.assignTo, b.assignTo], 2), propertyA = _f[0], propertyB = _f[1];
                    break;
                case 'date':
                    _g = tslib_1.__read([a.date, b.date], 2), propertyA = _g[0], propertyB = _g[1];
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
//# sourceMappingURL=tickets.component.js.map