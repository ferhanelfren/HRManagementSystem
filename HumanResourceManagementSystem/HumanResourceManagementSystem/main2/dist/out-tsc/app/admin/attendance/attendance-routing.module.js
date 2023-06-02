"use strict";
exports.__esModule = true;
exports.AttendanceRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var today_component_1 = require("./today/today.component");
var employee_component_1 = require("./employee/employee.component");
var page404_component_1 = require("src/app/authentication/page404/page404.component");
var attendance_sheet_component_1 = require("./attendance-sheet/attendance-sheet.component");
var routes = [
    {
        path: "today",
        component: today_component_1.TodayComponent
    },
    {
        path: "employee",
        component: employee_component_1.EmployeeComponent
    },
    {
        path: "attendance-sheet",
        component: attendance_sheet_component_1.AttendanceSheetComponent
    },
    { path: "**", component: page404_component_1.Page404Component },
];
var AttendanceRoutingModule = /** @class */ (function () {
    function AttendanceRoutingModule() {
    }
    AttendanceRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AttendanceRoutingModule);
    return AttendanceRoutingModule;
}());
exports.AttendanceRoutingModule = AttendanceRoutingModule;
//# sourceMappingURL=attendance-routing.module.js.map