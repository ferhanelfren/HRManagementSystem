"use strict";
exports.__esModule = true;
exports.PayrollRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_salary_component_1 = require("./employee-salary/employee-salary.component");
var payslip_component_1 = require("./payslip/payslip.component");
var routes = [
    {
        path: "employee-salary",
        component: employee_salary_component_1.EmployeeSalaryComponent
    },
    {
        path: "payslip",
        component: payslip_component_1.PayslipComponent
    },
];
var PayrollRoutingModule = /** @class */ (function () {
    function PayrollRoutingModule() {
    }
    PayrollRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PayrollRoutingModule);
    return PayrollRoutingModule;
}());
exports.PayrollRoutingModule = PayrollRoutingModule;
//# sourceMappingURL=payroll-routing.module.js.map