"use strict";
exports.__esModule = true;
exports.MaterialTableComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
var ELEMENT_DATA = [
    {
        no: 1,
        name: 'John Doe',
        gender: 'male',
        email: 'test@example.com',
        address: '729 S. Paris Hill St',
        mobile: 1234567890,
        salary: 120000
    },
    {
        no: 2,
        name: 'Sarah Smith',
        gender: 'female',
        email: 'test@example.com',
        address: '9003 Lake Street Hinesville',
        mobile: 1234567890,
        salary: 170000
    },
    {
        no: 3,
        name: 'Airi Satou',
        gender: 'male',
        email: 'test@example.com',
        address: '848 Old Durham Street Piedmont',
        mobile: 1234567890,
        salary: 150000
    },
    {
        no: 4,
        name: 'Angelica Ramos',
        gender: 'male',
        email: 'test@example.com',
        address: '8008 Anderson Drive Titusville',
        mobile: 1234567890,
        salary: 190000
    },
    {
        no: 5,
        name: 'Ashton Cox',
        gender: 'female',
        email: 'test@example.com',
        address: '620 East Ave. Dundalk',
        mobile: 1234567890,
        salary: 140000
    },
    {
        no: 6,
        name: 'Cara Stevens',
        gender: 'male',
        email: 'test@example.com',
        address: '9641 Delaware Street Camp Hill',
        mobile: 1234567890,
        salary: 220000
    },
    {
        no: 7,
        name: 'Jens Brincker',
        gender: 'male',
        email: 'test@example.com',
        address: '83 Pennsylvania Road',
        mobile: 1234567890,
        salary: 170000
    },
    {
        no: 8,
        name: 'Mark Hay',
        gender: 'female',
        email: 'test@example.com',
        address: '786 Lake Forest Rd. Biloxi',
        mobile: 1234567890,
        salary: 320000
    },
    {
        no: 9,
        name: 'Anthony Davie',
        gender: 'male',
        email: 'test@example.com',
        address: '226 Heritage Dr. Durham',
        mobile: 1234567890,
        salary: 620000
    },
    {
        no: 10,
        name: 'Sue Woodger',
        gender: 'male',
        email: 'test@example.com',
        address: '7 SE. Pumpkin Hill Lane',
        mobile: 1234567890,
        salary: 110000
    },
];
var MaterialTableComponent = /** @class */ (function () {
    function MaterialTableComponent() {
        this.displayedColumns = [
            'no',
            'name',
            'gender',
            'email',
            'address',
            'mobile',
            'salary',
        ];
        this.dataSource = ELEMENT_DATA;
        this.dataSource2 = new table_1.MatTableDataSource(ELEMENT_DATA);
        this.dataSource3 = new table_1.MatTableDataSource(ELEMENT_DATA);
        //constructor
    }
    MaterialTableComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource3.filter = filterValue.trim().toLowerCase();
    };
    MaterialTableComponent.prototype.ngOnInit = function () {
        this.dataSource2.paginator = this.paginator;
    };
    tslib_1.__decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], MaterialTableComponent.prototype, "paginator");
    MaterialTableComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-material-table',
            templateUrl: './material-table.component.html',
            styleUrls: ['./material-table.component.scss']
        })
    ], MaterialTableComponent);
    return MaterialTableComponent;
}());
exports.MaterialTableComponent = MaterialTableComponent;
//# sourceMappingURL=material-table.component.js.map