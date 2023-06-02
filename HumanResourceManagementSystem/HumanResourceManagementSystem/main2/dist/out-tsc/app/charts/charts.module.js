"use strict";
exports.__esModule = true;
exports.ChartsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var charts_routing_module_1 = require("./charts-routing.module");
var echart_component_1 = require("./echart/echart.component");
var chartjs_component_1 = require("./chartjs/chartjs.component");
var apexchart_component_1 = require("./apexchart/apexchart.component");
var ngx_echarts_1 = require("ngx-echarts");
var ng2_charts_1 = require("ng2-charts");
var ngxchart_component_1 = require("./ngxchart/ngxchart.component");
var ngx_charts_1 = require("@swimlane/ngx-charts");
var ng_apexcharts_1 = require("ng-apexcharts");
var angular_gauge_1 = require("angular-gauge");
var gauge_component_1 = require("./gauge/gauge.component");
var menu_1 = require("@angular/material/menu");
var icon_1 = require("@angular/material/icon");
var ngx_gauge_1 = require("ngx-gauge");
var components_module_1 = require("../shared/components/components.module");
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                echart_component_1.EchartComponent,
                chartjs_component_1.ChartjsComponent,
                apexchart_component_1.ApexchartComponent,
                ngxchart_component_1.NgxchartComponent,
                gauge_component_1.GaugeComponent,
            ],
            imports: [
                common_1.CommonModule,
                charts_routing_module_1.ChartsRoutingModule,
                ngx_echarts_1.NgxEchartsModule.forRoot({
                    echarts: function () { return Promise.resolve().then(function () { return require('echarts'); }); }
                }),
                ng2_charts_1.NgChartsModule,
                ngx_charts_1.NgxChartsModule,
                ng_apexcharts_1.NgApexchartsModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                angular_gauge_1.GaugeModule.forRoot(),
                ngx_gauge_1.NgxGaugeModule,
                components_module_1.ComponentsModule,
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=charts.module.js.map