"use strict";
exports.__esModule = true;
exports.ContactsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var contacts_routing_module_1 = require("./contacts-routing.module");
var contacts_component_1 = require("./contacts.component");
var form_component_1 = require("./form/form.component");
var delete_component_1 = require("./delete/delete.component");
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
var contacts_service_1 = require("./contacts.service");
var components_module_1 = require("../shared/components/components.module");
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [contacts_component_1.ContactsComponent, form_component_1.FormComponent, delete_component_1.DeleteComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                contacts_routing_module_1.AdvanceTableRoutingModule,
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
                progress_spinner_1.MatProgressSpinnerModule,
                components_module_1.ComponentsModule,
            ],
            providers: [contacts_service_1.ContactsService]
        })
    ], ContactsModule);
    return ContactsModule;
}());
exports.ContactsModule = ContactsModule;
//# sourceMappingURL=contacts.module.js.map