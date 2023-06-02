"use strict";
exports.__esModule = true;
exports.DashboardRoutingModule = void 0;
var tslib_1 = require("tslib");
var page404_component_1 = require("./../../authentication/page404/page404.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_component_1 = require("./main/main.component");
var dashboard2_component_1 = require("./dashboard2/dashboard2.component");
var routes = [
    {
        path: "",
        redirectTo: "main",
        pathMatch: "full"
    },
    {
        path: "main",
        component: main_component_1.MainComponent
    },
    {
        path: "dashboard2",
        component: dashboard2_component_1.Dashboard2Component
    },
    { path: "**", component: page404_component_1.Page404Component },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=dashboard-routing.module.js.map