"use strict";
exports.__esModule = true;
exports.LeavesRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var leave_balance_component_1 = require("./leave-balance/leave-balance.component");
var leave_requests_component_1 = require("./leave-requests/leave-requests.component");
var leave_types_component_1 = require("./leave-types/leave-types.component");
var routes = [
    {
        path: "leave-requests",
        component: leave_requests_component_1.LeaveRequestsComponent
    },
    {
        path: "leave-balance",
        component: leave_balance_component_1.LeaveBalanceComponent
    },
    {
        path: "leave-types",
        component: leave_types_component_1.LeaveTypesComponent
    },
];
var LeavesRoutingModule = /** @class */ (function () {
    function LeavesRoutingModule() {
    }
    LeavesRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], LeavesRoutingModule);
    return LeavesRoutingModule;
}());
exports.LeavesRoutingModule = LeavesRoutingModule;
//# sourceMappingURL=leaves-routing.module.js.map