"use strict";
exports.__esModule = true;
exports.WidgetRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var chart_widget_component_1 = require("./chart-widget/chart-widget.component");
var data_widget_component_1 = require("./data-widget/data-widget.component");
var routes = [
    {
        path: "",
        redirectTo: "chart-widget",
        pathMatch: "full"
    },
    {
        path: "chart-widget",
        component: chart_widget_component_1.ChartWidgetComponent
    },
    {
        path: "data-widget",
        component: data_widget_component_1.DataWidgetComponent
    },
];
var WidgetRoutingModule = /** @class */ (function () {
    function WidgetRoutingModule() {
    }
    WidgetRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], WidgetRoutingModule);
    return WidgetRoutingModule;
}());
exports.WidgetRoutingModule = WidgetRoutingModule;
//# sourceMappingURL=widget-routing.module.js.map