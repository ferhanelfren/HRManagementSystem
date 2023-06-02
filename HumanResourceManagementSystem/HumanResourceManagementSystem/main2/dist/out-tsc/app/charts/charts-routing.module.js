"use strict";
exports.__esModule = true;
exports.ChartsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var chartjs_component_1 = require("./chartjs/chartjs.component");
var echart_component_1 = require("./echart/echart.component");
var apexchart_component_1 = require("./apexchart/apexchart.component");
var ngxchart_component_1 = require("./ngxchart/ngxchart.component");
var gauge_component_1 = require("./gauge/gauge.component");
var routes = [
    {
        path: "",
        redirectTo: "echart",
        pathMatch: "full"
    },
    {
        path: "echart",
        component: echart_component_1.EchartComponent
    },
    {
        path: "apex",
        component: apexchart_component_1.ApexchartComponent
    },
    {
        path: "chartjs",
        component: chartjs_component_1.ChartjsComponent
    },
    {
        path: "ngx-charts",
        component: ngxchart_component_1.NgxchartComponent
    },
    {
        path: "gauge",
        component: gauge_component_1.GaugeComponent
    },
];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());
exports.ChartsRoutingModule = ChartsRoutingModule;
//# sourceMappingURL=charts-routing.module.js.map