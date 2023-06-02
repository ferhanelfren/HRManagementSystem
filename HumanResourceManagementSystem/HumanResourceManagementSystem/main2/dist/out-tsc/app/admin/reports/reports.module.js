"use strict";
exports.__esModule = true;
exports.ReportsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var snack_bar_1 = require("@angular/material/snack-bar");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var select_1 = require("@angular/material/select");
var radio_1 = require("@angular/material/radio");
var datepicker_1 = require("@angular/material/datepicker");
var dialog_1 = require("@angular/material/dialog");
var sort_1 = require("@angular/material/sort");
var checkbox_1 = require("@angular/material/checkbox");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var menu_1 = require("@angular/material/menu");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var chips_1 = require("@angular/material/chips");
var progress_bar_1 = require("@angular/material/progress-bar");
var tabs_1 = require("@angular/material/tabs");
var toolbar_1 = require("@angular/material/toolbar");
var tooltip_1 = require("@angular/material/tooltip");
var ckeditor5_angular_1 = require("@ckeditor/ckeditor5-angular");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var reports_routing_module_1 = require("./reports-routing.module");
var leave_report_component_1 = require("./leave-report/leave-report.component");
var leave_report_service_1 = require("./leave-report/leave-report.service");
var expense_report_component_1 = require("./expense/expense-report.component");
var expense_report_service_1 = require("./expense/expense-report.service");
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [leave_report_component_1.LeaveReportComponent, expense_report_component_1.ExpenseReportComponent],
            imports: [
                common_1.CommonModule,
                reports_routing_module_1.ReportsRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                snack_bar_1.MatSnackBarModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                dialog_1.MatDialogModule,
                sort_1.MatSortModule,
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                datepicker_1.MatDatepickerModule,
                tooltip_1.MatTooltipModule,
                toolbar_1.MatToolbarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                menu_1.MatMenuModule,
                drag_drop_1.DragDropModule,
                chips_1.MatChipsModule,
                progress_bar_1.MatProgressBarModule,
                tabs_1.MatTabsModule,
                ckeditor5_angular_1.CKEditorModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [leave_report_service_1.LeaveReportService, expense_report_service_1.ExpenseReportService]
        })
    ], ReportsModule);
    return ReportsModule;
}());
exports.ReportsModule = ReportsModule;
//# sourceMappingURL=reports.module.js.map