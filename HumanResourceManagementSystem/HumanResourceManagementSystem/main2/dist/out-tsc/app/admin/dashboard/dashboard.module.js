"use strict";
exports.__esModule = true;
exports.DashboardModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_scrollbar_1 = require("ngx-scrollbar");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var main_component_1 = require("./main/main.component");
var dashboard2_component_1 = require("./dashboard2/dashboard2.component");
var ng2_charts_1 = require("ng2-charts");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var menu_1 = require("@angular/material/menu");
var progress_bar_1 = require("@angular/material/progress-bar");
var tooltip_1 = require("@angular/material/tooltip");
var ng_apexcharts_1 = require("ng-apexcharts");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("./../../shared/shared.module");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [main_component_1.MainComponent, dashboard2_component_1.Dashboard2Component],
            imports: [
                common_1.CommonModule,
                dashboard_routing_module_1.DashboardRoutingModule,
                ng2_charts_1.NgChartsModule,
                ng_apexcharts_1.NgApexchartsModule,
                ngx_scrollbar_1.NgScrollbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                menu_1.MatMenuModule,
                tooltip_1.MatTooltipModule,
                progress_bar_1.MatProgressBarModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map