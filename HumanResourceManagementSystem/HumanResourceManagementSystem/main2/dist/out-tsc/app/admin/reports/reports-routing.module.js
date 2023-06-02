"use strict";
exports.__esModule = true;
exports.ReportsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var leave_report_component_1 = require("./leave-report/leave-report.component");
var expense_report_component_1 = require("./expense/expense-report.component");
var routes = [
    {
        path: "leave-report",
        component: leave_report_component_1.LeaveReportComponent
    },
    {
        path: "expense-report",
        component: expense_report_component_1.ExpenseReportComponent
    },
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());
exports.ReportsRoutingModule = ReportsRoutingModule;
//# sourceMappingURL=reports-routing.module.js.map