"use strict";
exports.__esModule = true;
exports.LeavesModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var leaves_routing_module_1 = require("./leaves-routing.module");
var form_component_1 = require("./leave-requests/form/form.component");
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
var tooltip_1 = require("@angular/material/tooltip");
var leave_requests_component_1 = require("./leave-requests/leave-requests.component");
var leaves_service_1 = require("./leave-requests/leaves.service");
var delete_component_1 = require("./leave-requests/delete/delete.component");
var leave_balance_component_1 = require("./leave-balance/leave-balance.component");
var leave_balance_service_1 = require("./leave-balance/leave-balance.service");
var leave_types_component_1 = require("./leave-types/leave-types.component");
var leave_types_service_1 = require("./leave-types/leave-types.service");
var components_module_1 = require("src/app/shared/components/components.module");
var LeavesModule = /** @class */ (function () {
    function LeavesModule() {
    }
    LeavesModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                form_component_1.FormComponent,
                delete_component_1.DeleteComponent,
                leave_requests_component_1.LeaveRequestsComponent,
                leave_balance_component_1.LeaveBalanceComponent,
                leave_types_component_1.LeaveTypesComponent,
            ],
            imports: [
                common_1.CommonModule,
                leaves_routing_module_1.LeavesRoutingModule,
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
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                card_1.MatCardModule,
                datepicker_1.MatDatepickerModule,
                dialog_1.MatDialogModule,
                sort_1.MatSortModule,
                tooltip_1.MatTooltipModule,
                toolbar_1.MatToolbarModule,
                menu_1.MatMenuModule,
                progress_spinner_1.MatProgressSpinnerModule,
                components_module_1.ComponentsModule,
            ],
            providers: [leaves_service_1.LeavesService, leave_balance_service_1.LeaveBalanceService, leave_types_service_1.LeaveTypesService]
        })
    ], LeavesModule);
    return LeavesModule;
}());
exports.LeavesModule = LeavesModule;
//# sourceMappingURL=leaves.module.js.map