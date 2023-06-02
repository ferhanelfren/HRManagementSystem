"use strict";
exports.__esModule = true;
exports.ClientModule = void 0;
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
var sort_1 = require("@angular/material/sort");
var toolbar_1 = require("@angular/material/toolbar");
var datepicker_1 = require("@angular/material/datepicker");
var checkbox_1 = require("@angular/material/checkbox");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var add_client_component_1 = require("./add-client/add-client.component");
var edit_client_component_1 = require("./edit-client/edit-client.component");
var tabs_1 = require("@angular/material/tabs");
var tooltip_1 = require("@angular/material/tooltip");
var clients_service_1 = require("./all-clients/clients.service");
var form_dialog_component_1 = require("./all-clients/dialog/form-dialog/form-dialog.component");
var delete_component_1 = require("./all-clients/dialog/delete/delete.component");
var clients_routing_module_1 = require("./clients-routing.module");
var all_clients_component_1 = require("./all-clients/all-clients.component");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                all_clients_component_1.AllclientComponent,
                form_dialog_component_1.FormDialogComponent,
                delete_component_1.DeleteDialogComponent,
                add_client_component_1.AddClientComponent,
                edit_client_component_1.EditClientComponent,
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
                toolbar_1.MatToolbarModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                datepicker_1.MatDatepickerModule,
                tabs_1.MatTabsModule,
                tooltip_1.MatTooltipModule,
                progress_spinner_1.MatProgressSpinnerModule,
                clients_routing_module_1.ClientRoutingModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [clients_service_1.ClientsService]
        })
    ], ClientModule);
    return ClientModule;
}());
exports.ClientModule = ClientModule;
//# sourceMappingURL=clients.module.js.map