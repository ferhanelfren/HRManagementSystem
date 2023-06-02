"use strict";
exports.__esModule = true;
exports.CalendarsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var calendar_routing_module_1 = require("./calendar-routing.module");
var angular_1 = require("@fullcalendar/angular");
var button_1 = require("@angular/material/button");
var datepicker_1 = require("@angular/material/datepicker");
var icon_1 = require("@angular/material/icon");
var form_field_1 = require("@angular/material/form-field");
var menu_1 = require("@angular/material/menu");
var snack_bar_1 = require("@angular/material/snack-bar");
var select_1 = require("@angular/material/select");
var checkbox_1 = require("@angular/material/checkbox");
var input_1 = require("@angular/material/input");
var tooltip_1 = require("@angular/material/tooltip");
var dialog_1 = require("@angular/material/dialog");
var radio_1 = require("@angular/material/radio");
var angular_datetime_picker_1 = require("@danielmoncada/angular-datetime-picker");
var calendar_component_1 = require("./calendar.component");
var form_dialog_component_1 = require("./dialogs/form-dialog/form-dialog.component");
var calendar_service_1 = require("./calendar.service");
var components_module_1 = require("../shared/components/components.module");
var CalendarsModule = /** @class */ (function () {
    function CalendarsModule() {
    }
    CalendarsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                calendar_routing_module_1.CalendarRoutingModule,
                angular_1.FullCalendarModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                input_1.MatInputModule,
                dialog_1.MatDialogModule,
                tooltip_1.MatTooltipModule,
                datepicker_1.MatDatepickerModule,
                snack_bar_1.MatSnackBarModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                radio_1.MatRadioModule,
                menu_1.MatMenuModule,
                angular_datetime_picker_1.OwlDateTimeModule,
                angular_datetime_picker_1.OwlNativeDateTimeModule,
                components_module_1.ComponentsModule,
            ],
            declarations: [calendar_component_1.CalendarComponent, form_dialog_component_1.FormDialogComponent],
            providers: [calendar_service_1.CalendarService]
        })
    ], CalendarsModule);
    return CalendarsModule;
}());
exports.CalendarsModule = CalendarsModule;
//# sourceMappingURL=calendar.module.js.map