"use strict";
exports.__esModule = true;
exports.AttendanceModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var attendance_routing_module_1 = require("./attendance-routing.module");
var today_component_1 = require("./today/today.component");
var employee_component_1 = require("./employee/employee.component");
var today_service_1 = require("./today/today.service");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var snack_bar_1 = require("@angular/material/snack-bar");
var button_1 = require("@angular/material/button");
var radio_1 = require("@angular/material/radio");
var icon_1 = require("@angular/material/icon");
var checkbox_1 = require("@angular/material/checkbox");
var select_1 = require("@angular/material/select");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var card_1 = require("@angular/material/card");
var datepicker_1 = require("@angular/material/datepicker");
var dialog_1 = require("@angular/material/dialog");
var sort_1 = require("@angular/material/sort");
var toolbar_1 = require("@angular/material/toolbar");
var menu_1 = require("@angular/material/menu");
var tabs_1 = require("@angular/material/tabs");
var ngx_charts_1 = require("@swimlane/ngx-charts");
var attendance_sheet_component_1 = require("./attendance-sheet/attendance-sheet.component");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var AttendanceModule = /** @class */ (function () {
    function AttendanceModule() {
    }
    AttendanceModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [today_component_1.TodayComponent, employee_component_1.EmployeeComponent, attendance_sheet_component_1.AttendanceSheetComponent],
            imports: [
                common_1.CommonModule,
                attendance_routing_module_1.AttendanceRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                snack_bar_1.MatSnackBarModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                card_1.MatCardModule,
                datepicker_1.MatDatepickerModule,
                dialog_1.MatDialogModule,
                sort_1.MatSortModule,
                toolbar_1.MatToolbarModule,
                menu_1.MatMenuModule,
                tabs_1.MatTabsModule,
                progress_spinner_1.MatProgressSpinnerModule,
                ngx_charts_1.NgxChartsModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [today_service_1.TodayService]
        })
    ], AttendanceModule);
    return AttendanceModule;
}());
exports.AttendanceModule = AttendanceModule;
//# sourceMappingURL=attendance.module.js.map