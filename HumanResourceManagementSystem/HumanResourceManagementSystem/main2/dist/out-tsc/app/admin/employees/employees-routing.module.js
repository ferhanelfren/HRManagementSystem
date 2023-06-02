"use strict";
exports.__esModule = true;
exports.EmployeesRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_employee_component_1 = require("./add-employee/add-employee.component");
var page404_component_1 = require("../../authentication/page404/page404.component");
var allemployees_component_1 = require("./allEmployees/allemployees.component");
var edit_employee_component_1 = require("./edit-employee/edit-employee.component");
var employee_profile_component_1 = require("./employee-profile/employee-profile.component");
var routes = [
    {
        path: "allEmployees",
        component: allemployees_component_1.AllemployeesComponent
    },
    {
        path: "add-employee",
        component: add_employee_component_1.AddEmployeeComponent
    },
    {
        path: "edit-employee",
        component: edit_employee_component_1.EditEmployeeComponent
    },
    {
        path: "employee-profile",
        component: employee_profile_component_1.EmployeeProfileComponent
    },
    { path: "**", component: page404_component_1.Page404Component },
];
var EmployeesRoutingModule = /** @class */ (function () {
    function EmployeesRoutingModule() {
    }
    EmployeesRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], EmployeesRoutingModule);
    return EmployeesRoutingModule;
}());
exports.EmployeesRoutingModule = EmployeesRoutingModule;
//# sourceMappingURL=employees-routing.module.js.map