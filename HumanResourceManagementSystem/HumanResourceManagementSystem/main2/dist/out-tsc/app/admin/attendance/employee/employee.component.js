"use strict";
exports.__esModule = true;
exports.EmployeeComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_charts_1 = require("@swimlane/ngx-charts");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        this.gradient = false;
        this.showLegend = true;
        this.legendPosition = 'right';
        this.view = [500, 400];
        this.colorScheme = {
            domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
            group: ngx_charts_1.ScaleType.Ordinal,
            selectable: true,
            name: 'Customer Usage'
        };
        this.showLabels = true;
        // data goes here
        this.single = [
            {
                name: 'Present',
                value: 42
            },
            {
                name: 'On Duty',
                value: 2
            },
            {
                name: 'Paid Leave',
                value: 5
            },
            {
                name: 'Absent',
                value: 1
            },
            {
                name: 'Holiday Leave',
                value: 3
            },
            {
                name: 'Weekend',
                value: 0
            },
        ];
    }
    EmployeeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-employee',
            templateUrl: './employee.component.html',
            styleUrls: ['./employee.component.scss']
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map