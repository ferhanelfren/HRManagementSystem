"use strict";
exports.__esModule = true;
exports.ExampleDataSource = exports.MyProjectsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var my_projects_service_1 = require("./my-projects.service");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var collections_1 = require("@angular/cdk/collections");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var menu_1 = require("@angular/material/menu");
var collections_2 = require("@angular/cdk/collections");
var form_component_1 = require("./form/form.component");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var MyProjectsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MyProjectsComponent, _super);
    function MyProjectsComponent(httpClient, dialog, myProjectsService, snackBar) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.dialog = dialog;
        _this.myProjectsService = myProjectsService;
        _this.snackBar = snackBar;
        _this.filterToggle = false;
        _this.displayedColumns = [
            'id',
            'title',
            'clientName',
            'startDate',
            'endDate',
            'deadLine',
            'noOfMembers',
            'priority',
            'progress',
            'status',
        ];
        _this.selection = new collections_2.SelectionModel(true, []);
        _this.contextMenuPosition = { x: '0px', y: '0px' };
        return _this;
    }
    MyProjectsComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    MyProjectsComponent.prototype.detailsCall = function (row) {
        this.dialog.open(form_component_1.FormComponent, {
            data: {
                myProjects: row,
                action: 'details'
            },
            height: '70%',
            width: '35%'
        });
    };
    MyProjectsComponent.prototype.toggleStar = function (row) {
        console.log(row);
    };
    MyProjectsComponent.prototype.loadData = function () {
        var _this = this;
        this.exampleDatabase = new my_projects_service_1.MyProjectsService(this.httpClient);
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
    ], MyProjectsComponent.prototype, "paginator");
    tslib_1.__decorate([
        core_1.ViewChild(sort_1.MatSort, { static: true })
    ], MyProjectsComponent.prototype, "sort");
    tslib_1.__decorate([
        core_1.ViewChild('filter', { static: true })
    ], MyProjectsComponent.prototype, "filter");
    tslib_1.__decorate([
        core_1.ViewChild(menu_1.MatMenuTrigger)
    ], MyProjectsComponent.prototype, "contextMenu");
    MyProjectsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-my-projects',
            templateUrl: './my-projects.component.html',
            styleUrls: ['./my-projects.component.scss']
        })
    ], MyProjectsComponent);
    return MyProjectsComponent;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.MyProjectsComponent = MyProjectsComponent;
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
        this.exampleDatabase.getAllMyProjectss();
        return rxjs_1.merge.apply(void 0, tslib_1.__spreadArray([], tslib_1.__read(displayDataChanges))).pipe(operators_1.map(function () {
            // Filter data
            _this.filteredData = _this.exampleDatabase.data
                .slice()
                .filter(function (myProjects) {
                var searchStr = (myProjects.clientName +
                    myProjects.startDate +
                    myProjects.endDate +
                    myProjects.deadLine +
                    myProjects.status +
                    myProjects.priority).toLowerCase();
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
                case 'clientName':
                    _b = tslib_1.__read([a.clientName, b.clientName], 2), propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'startDate':
                    _c = tslib_1.__read([a.startDate, b.startDate], 2), propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'endDate':
                    _d = tslib_1.__read([a.endDate, b.endDate], 2), propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'status':
                    _e = tslib_1.__read([a.status, b.status], 2), propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'noOfMembers':
                    _f = tslib_1.__read([a.noOfMembers, b.noOfMembers], 2), propertyA = _f[0], propertyB = _f[1];
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
//# sourceMappingURL=my-projects.component.js.map