"use strict";
exports.__esModule = true;
exports.SupportsModule = void 0;
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
var tooltip_1 = require("@angular/material/tooltip");
var datepicker_1 = require("@angular/material/datepicker");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var tabs_1 = require("@angular/material/tabs");
var progress_bar_1 = require("@angular/material/progress-bar");
var supports_routing_module_1 = require("./supports-routing.module");
var tickets_component_1 = require("./tickets/tickets.component");
var ticket_details_component_1 = require("./ticket-details/ticket-details.component");
var delete_component_1 = require("./tickets/dialog/delete/delete.component");
var form_dialog_component_1 = require("./tickets/dialog/form-dialog/form-dialog.component");
var tickets_service_1 = require("./tickets/tickets.service");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var SupportsModule = /** @class */ (function () {
    function SupportsModule() {
    }
    SupportsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                tickets_component_1.TicketsComponent,
                ticket_details_component_1.TicketDetailsComponent,
                delete_component_1.DeleteDialogComponent,
                form_dialog_component_1.FormDialogComponent,
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
                tabs_1.MatTabsModule,
                tooltip_1.MatTooltipModule,
                progress_bar_1.MatProgressBarModule,
                datepicker_1.MatDatepickerModule,
                progress_spinner_1.MatProgressSpinnerModule,
                supports_routing_module_1.SupportsRoutingModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [tickets_service_1.TicketsService]
        })
    ], SupportsModule);
    return SupportsModule;
}());
exports.SupportsModule = SupportsModule;
//# sourceMappingURL=supports.module.js.map