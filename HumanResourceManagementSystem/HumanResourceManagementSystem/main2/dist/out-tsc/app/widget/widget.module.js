"use strict";
exports.__esModule = true;
exports.WidgetModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_scrollbar_1 = require("ngx-scrollbar");
var forms_1 = require("@angular/forms");
var widget_routing_module_1 = require("./widget-routing.module");
var chart_widget_component_1 = require("./chart-widget/chart-widget.component");
var data_widget_component_1 = require("./data-widget/data-widget.component");
var ng_apexcharts_1 = require("ng-apexcharts");
var ng2_charts_1 = require("ng2-charts");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var icon_1 = require("@angular/material/icon");
var checkbox_1 = require("@angular/material/checkbox");
var button_1 = require("@angular/material/button");
var progress_bar_1 = require("@angular/material/progress-bar");
var tabs_1 = require("@angular/material/tabs");
var components_module_1 = require("../shared/components/components.module");
var WidgetModule = /** @class */ (function () {
    function WidgetModule() {
    }
    WidgetModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [chart_widget_component_1.ChartWidgetComponent, data_widget_component_1.DataWidgetComponent],
            imports: [
                common_1.CommonModule,
                widget_routing_module_1.WidgetRoutingModule,
                ngx_scrollbar_1.NgScrollbarModule,
                ng_apexcharts_1.NgApexchartsModule,
                forms_1.FormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                drag_drop_1.DragDropModule,
                icon_1.MatIconModule,
                checkbox_1.MatCheckboxModule,
                button_1.MatButtonModule,
                progress_bar_1.MatProgressBarModule,
                tabs_1.MatTabsModule,
                ng2_charts_1.NgChartsModule,
                components_module_1.ComponentsModule,
            ]
        })
    ], WidgetModule);
    return WidgetModule;
}());
exports.WidgetModule = WidgetModule;
//# sourceMappingURL=widget.module.js.map