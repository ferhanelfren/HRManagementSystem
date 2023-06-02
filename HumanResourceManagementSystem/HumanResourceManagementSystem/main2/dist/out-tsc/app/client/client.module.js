"use strict";
exports.__esModule = true;
exports.ClientModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_scrollbar_1 = require("ngx-scrollbar");
var ng2_charts_1 = require("ng2-charts");
var ngx_echarts_1 = require("ngx-echarts");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var snack_bar_1 = require("@angular/material/snack-bar");
var form_field_1 = require("@angular/material/form-field");
var tabs_1 = require("@angular/material/tabs");
var ng_apexcharts_1 = require("ng-apexcharts");
var datepicker_1 = require("@angular/material/datepicker");
var select_1 = require("@angular/material/select");
var checkbox_1 = require("@angular/material/checkbox");
var input_1 = require("@angular/material/input");
var tooltip_1 = require("@angular/material/tooltip");
var radio_1 = require("@angular/material/radio");
var client_routing_module_1 = require("./client-routing.module");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var billing_component_1 = require("./billing/billing.component");
var settings_component_1 = require("./settings/settings.component");
var my_projects_service_1 = require("./projects/my-projects/my-projects.service");
var components_module_1 = require("../shared/components/components.module");
var chat_component_1 = require("./chat/chat.component");
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                dashboard_component_1.DashboardComponent,
                billing_component_1.BillingComponent,
                settings_component_1.SettingsComponent,
                chat_component_1.ChatComponent,
            ],
            imports: [
                common_1.CommonModule,
                ng2_charts_1.NgChartsModule,
                ngx_echarts_1.NgxEchartsModule.forRoot({
                    echarts: function () { return Promise.resolve().then(function () { return require('echarts'); }); }
                }),
                ngx_scrollbar_1.NgScrollbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                client_routing_module_1.ClientRoutingModule,
                ng_apexcharts_1.NgApexchartsModule,
                snack_bar_1.MatSnackBarModule,
                form_field_1.MatFormFieldModule,
                tabs_1.MatTabsModule,
                datepicker_1.MatDatepickerModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                input_1.MatInputModule,
                tooltip_1.MatTooltipModule,
                radio_1.MatRadioModule,
                components_module_1.ComponentsModule,
            ],
            providers: [my_projects_service_1.MyProjectsService]
        })
    ], ClientModule);
    return ClientModule;
}());
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map