"use strict";
exports.__esModule = true;
exports.PayrollModule = void 0;
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
var dialog_1 = require("@angular/material/dialog");
var menu_1 = require("@angular/material/menu");
var sort_1 = require("@angular/material/sort");
var toolbar_1 = require("@angular/material/toolbar");
var datepicker_1 = require("@angular/material/datepicker");
var checkbox_1 = require("@angular/material/checkbox");
var tabs_1 = require("@angular/material/tabs");
var tooltip_1 = require("@angular/material/tooltip");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var payroll_routing_module_1 = require("./payroll-routing.module");
var employee_salary_component_1 = require("./employee-salary/employee-salary.component");
var payslip_component_1 = require("./payslip/payslip.component");
var delete_component_1 = require("./employee-salary/dialogs/delete/delete.component");
var form_dialog_component_1 = require("./employee-salary/dialogs/form-dialog/form-dialog.component");
var employee_salary_service_1 = require("./employee-salary/employee-salary.service");
var PayrollModule = /** @class */ (function () {
    function PayrollModule() {
    }
    PayrollModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                employee_salary_component_1.EmployeeSalaryComponent,
                payslip_component_1.PayslipComponent,
                delete_component_1.DeleteDialogComponent,
                form_dialog_component_1.FormDialogComponent,
            ],
            imports: [
                common_1.CommonModule,
                payroll_routing_module_1.PayrollRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                snack_bar_1.MatSnackBarModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                tabs_1.MatTabsModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                datepicker_1.MatDatepickerModule,
                dialog_1.MatDialogModule,
                sort_1.MatSortModule,
                tooltip_1.MatTooltipModule,
                toolbar_1.MatToolbarModule,
                menu_1.MatMenuModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
                progress_spinner_1.MatProgressSpinnerModule,
            ],
            providers: [employee_salary_service_1.EmployeeSalaryService]
        })
    ], PayrollModule);
    return PayrollModule;
}());
exports.PayrollModule = PayrollModule;
//# sourceMappingURL=payroll.module.js.map