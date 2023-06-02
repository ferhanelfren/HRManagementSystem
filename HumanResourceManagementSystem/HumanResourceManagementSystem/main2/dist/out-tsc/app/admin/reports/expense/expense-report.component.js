"use strict";
exports.__esModule = true;
exports.ExampleDataSource = exports.ExpenseReportComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var expense_report_service_1 = require("./expense-report.service");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var collections_1 = require("@angular/cdk/collections");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var ExpenseReportComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExpenseReportComponent, _super);
    function ExpenseReportComponent(httpClient, leavesService) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.leavesService = leavesService;
        _this.filterToggle = false;
        _this.displayedColumns = [
            'invoiceNo',
            'date',
            'expense',
            'img',
            'amount',
            'pmode',
            'status',
            'paidTo',
        ];
        return _this;
    }
    ExpenseReportComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ExpenseReportComponent.prototype.toggleStar = function (row) {
        console.log(row);
    };
    ExpenseReportComponent.prototype.loadData = function () {
        var _this = this;
        this.exampleDatabase = new expense_report_service_1.ExpenseReportService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        this.subs.sink = rxjs_1.fromEvent(this.filter.nativeElement, 'keyup').subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], ExpenseReportComponent.prototype, "paginator");
    tslib_1.__decorate([
        core_1.ViewChild(sort_1.MatSort, { static: true })
    ], ExpenseReportComponent.prototype, "sort");
    tslib_1.__decorate([
        core_1.ViewChild('filter', { static: true })
    ], ExpenseReportComponent.prototype, "filter");
    ExpenseReportComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-expense',
            templateUrl: './expense-report.component.html',
            styleUrls: ['./expense-report.component.scss']
        })
    ], ExpenseReportComponent);
    return ExpenseReportComponent;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.ExpenseReportComponent = ExpenseReportComponent;
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
                var searchStr = leaves.name.toLowerCase();
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
                case 'name':
                    _b = tslib_1.__read([a.name, b.name], 2), propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'status':
                    _c = tslib_1.__read([a.status, b.status], 2), propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'amount':
                    _d = tslib_1.__read([a.amount, b.amount], 2), propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'pmode':
                    _e = tslib_1.__read([a.pmode, b.pmode], 2), propertyA = _e[0], propertyB = _e[1];
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
//# sourceMappingURL=expense-report.component.js.map