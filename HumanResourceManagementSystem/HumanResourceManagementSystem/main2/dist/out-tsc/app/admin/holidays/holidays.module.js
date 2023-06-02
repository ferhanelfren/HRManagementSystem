"use strict";
exports.__esModule = true;
exports.HolidayModule = void 0;
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
var checkbox_1 = require("@angular/material/checkbox");
var dialog_1 = require("@angular/material/dialog");
var sort_1 = require("@angular/material/sort");
var toolbar_1 = require("@angular/material/toolbar");
var datepicker_1 = require("@angular/material/datepicker");
var tooltip_1 = require("@angular/material/tooltip");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var holidays_routing_module_1 = require("./holidays-routing.module");
var all_holidays_component_1 = require("./all-holidays/all-holidays.component");
var delete_component_1 = require("./all-holidays/dialog/delete/delete.component");
var form_dialog_component_1 = require("./all-holidays/dialog/form-dialog/form-dialog.component");
var edit_holiday_component_1 = require("./edit-holiday/edit-holiday.component");
var add_holiday_component_1 = require("./add-holiday/add-holiday.component");
var all_holidays_service_1 = require("./all-holidays/all-holidays.service");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var HolidayModule = /** @class */ (function () {
    function HolidayModule() {
    }
    HolidayModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                all_holidays_component_1.AllHolidayComponent,
                delete_component_1.DeleteDialogComponent,
                form_dialog_component_1.FormDialogComponent,
                edit_holiday_component_1.EditHolidayComponent,
                add_holiday_component_1.AddHolidayComponent,
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
                checkbox_1.MatCheckboxModule,
                toolbar_1.MatToolbarModule,
                select_1.MatSelectModule,
                tooltip_1.MatTooltipModule,
                datepicker_1.MatDatepickerModule,
                holidays_routing_module_1.HolidayRoutingModule,
                progress_spinner_1.MatProgressSpinnerModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [all_holidays_service_1.HolidayService]
        })
    ], HolidayModule);
    return HolidayModule;
}());
exports.HolidayModule = HolidayModule;
//# sourceMappingURL=holidays.module.js.map