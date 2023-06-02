"use strict";
exports.__esModule = true;
exports.EmployeesModule = void 0;
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
var employees_routing_module_1 = require("./employees-routing.module");
var add_employee_component_1 = require("./add-employee/add-employee.component");
var tabs_1 = require("@angular/material/tabs");
var tooltip_1 = require("@angular/material/tooltip");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var allemployees_component_1 = require("./allEmployees/allemployees.component");
var delete_component_1 = require("./allEmployees/dialogs/delete/delete.component");
var form_dialog_component_1 = require("./allEmployees/dialogs/form-dialog/form-dialog.component");
var edit_employee_component_1 = require("./edit-employee/edit-employee.component");
var employee_profile_component_1 = require("./employee-profile/employee-profile.component");
var employees_service_1 = require("./allEmployees/employees.service");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                allemployees_component_1.AllemployeesComponent,
                delete_component_1.DeleteDialogComponent,
                form_dialog_component_1.FormDialogComponent,
                add_employee_component_1.AddEmployeeComponent,
                edit_employee_component_1.EditEmployeeComponent,
                employee_profile_component_1.EmployeeProfileComponent,
            ],
            imports: [
                common_1.CommonModule,
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
                menu_1.MatMenuModule,
                toolbar_1.MatToolbarModule,
                select_1.MatSelectModule,
                datepicker_1.MatDatepickerModule,
                tabs_1.MatTabsModule,
                checkbox_1.MatCheckboxModule,
                tooltip_1.MatTooltipModule,
                employees_routing_module_1.EmployeesRoutingModule,
                progress_spinner_1.MatProgressSpinnerModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [employees_service_1.EmployeesService]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());
exports.EmployeesModule = EmployeesModule;
//# sourceMappingURL=employees.module.js.map