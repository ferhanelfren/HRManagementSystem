"use strict";
exports.__esModule = true;
exports.EmployeeModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_scrollbar_1 = require("ngx-scrollbar");
var forms_1 = require("@angular/forms");
var ng2_charts_1 = require("ng2-charts");
var ngx_echarts_1 = require("ngx-echarts");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var dialog_1 = require("@angular/material/dialog");
var ng_apexcharts_1 = require("ng-apexcharts");
var paginator_1 = require("@angular/material/paginator");
var snack_bar_1 = require("@angular/material/snack-bar");
var form_field_1 = require("@angular/material/form-field");
var sort_1 = require("@angular/material/sort");
var tabs_1 = require("@angular/material/tabs");
var menu_1 = require("@angular/material/menu");
var card_1 = require("@angular/material/card");
var datepicker_1 = require("@angular/material/datepicker");
var table_1 = require("@angular/material/table");
var select_1 = require("@angular/material/select");
var checkbox_1 = require("@angular/material/checkbox");
var input_1 = require("@angular/material/input");
var tooltip_1 = require("@angular/material/tooltip");
var radio_1 = require("@angular/material/radio");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var progress_bar_1 = require("@angular/material/progress-bar");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var employee_routing_module_1 = require("./employee-routing.module");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var form_component_1 = require("./attendance/form/form.component");
var myteam_component_1 = require("./myteam/myteam.component");
var settings_component_1 = require("./settings/settings.component");
var attendance_service_1 = require("./attendance/attendance.service");
var attendance_component_1 = require("./attendance/attendance.component");
var my_leaves_component_1 = require("./my-leaves/my-leaves.component");
var form_dialog_component_1 = require("./my-leaves/dialogs/form-dialog/form-dialog.component");
var delete_component_1 = require("./my-leaves/dialogs/delete/delete.component");
var form_component_2 = require("./my-projects/form/form.component");
var my_leaves_service_1 = require("./my-leaves/my-leaves.service");
var my_projects_component_1 = require("./my-projects/my-projects.component");
var my_projects_service_1 = require("./my-projects/my-projects.service");
var my_tasks_component_1 = require("./my-tasks/my-tasks.component");
var my_tasks_service_1 = require("./my-tasks/my-tasks.service");
var form_dialog_component_2 = require("./my-tasks/dialogs/form-dialog/form-dialog.component");
var delete_component_2 = require("./my-tasks/dialogs/delete/delete.component");
var components_module_1 = require("../shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var chat_component_1 = require("./chat/chat.component");
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                dashboard_component_1.DashboardComponent,
                attendance_component_1.AttendancesComponent,
                form_component_1.FormComponent,
                myteam_component_1.MyTeamsComponent,
                settings_component_1.SettingsComponent,
                my_leaves_component_1.MyLeavesComponent,
                form_dialog_component_1.FormDialogComponent,
                delete_component_1.DeleteDialogComponent,
                my_projects_component_1.MyProjectsComponent,
                form_component_2.FormComponent,
                my_tasks_component_1.MyTasksComponent,
                form_dialog_component_2.FormDialogComponent,
                delete_component_2.DeleteComponent,
                chat_component_1.ChatComponent,
            ],
            imports: [
                common_1.CommonModule,
                employee_routing_module_1.EmployeeRoutingModule,
                forms_1.FormsModule,
                ng2_charts_1.NgChartsModule,
                forms_1.ReactiveFormsModule,
                ngx_echarts_1.NgxEchartsModule.forRoot({
                    echarts: function () { return Promise.resolve().then(function () { return require('echarts'); }); }
                }),
                ngx_scrollbar_1.NgScrollbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                dialog_1.MatDialogModule,
                ng_apexcharts_1.NgApexchartsModule,
                paginator_1.MatPaginatorModule,
                snack_bar_1.MatSnackBarModule,
                form_field_1.MatFormFieldModule,
                sort_1.MatSortModule,
                tabs_1.MatTabsModule,
                card_1.MatCardModule,
                menu_1.MatMenuModule,
                datepicker_1.MatDatepickerModule,
                table_1.MatTableModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                input_1.MatInputModule,
                tooltip_1.MatTooltipModule,
                progress_bar_1.MatProgressBarModule,
                radio_1.MatRadioModule,
                drag_drop_1.DragDropModule,
                progress_spinner_1.MatProgressSpinnerModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [
                attendance_service_1.AttendancesService,
                my_leaves_service_1.MyLeavesService,
                my_projects_service_1.MyProjectsService,
                my_tasks_service_1.MyTasksService,
            ]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map