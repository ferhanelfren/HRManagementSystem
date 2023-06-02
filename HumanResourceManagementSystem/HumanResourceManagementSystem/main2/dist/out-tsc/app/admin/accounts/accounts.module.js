"use strict";
exports.__esModule = true;
exports.AccountsModule = void 0;
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
var checkbox_1 = require("@angular/material/checkbox");
var select_1 = require("@angular/material/select");
var dialog_1 = require("@angular/material/dialog");
var sort_1 = require("@angular/material/sort");
var datepicker_1 = require("@angular/material/datepicker");
var toolbar_1 = require("@angular/material/toolbar");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var tooltip_1 = require("@angular/material/tooltip");
var add_payment_component_1 = require("./add-payment/add-payment.component");
var invoice_component_1 = require("./invoice/invoice.component");
var allpayment_component_1 = require("./allpayment/allpayment.component");
var form_dialog_component_1 = require("./allpayment/dialog/form-dialog/form-dialog.component");
var delete_component_1 = require("./allpayment/dialog/delete/delete.component");
var payment_service_1 = require("./allpayment/payment.service");
var accounts_routing_module_1 = require("./accounts-routing.module");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                add_payment_component_1.AddPaymentComponent,
                invoice_component_1.InvoiceComponent,
                allpayment_component_1.AllpaymentComponent,
                form_dialog_component_1.FormDialogComponent,
                delete_component_1.DeleteDialogComponent,
            ],
            imports: [
                common_1.CommonModule,
                accounts_routing_module_1.AccountsRoutingModule,
                forms_1.FormsModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                snack_bar_1.MatSnackBarModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                dialog_1.MatDialogModule,
                checkbox_1.MatCheckboxModule,
                sort_1.MatSortModule,
                toolbar_1.MatToolbarModule,
                tooltip_1.MatTooltipModule,
                datepicker_1.MatDatepickerModule,
                select_1.MatSelectModule,
                progress_spinner_1.MatProgressSpinnerModule,
                forms_1.ReactiveFormsModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [payment_service_1.PaymentService]
        })
    ], AccountsModule);
    return AccountsModule;
}());
exports.AccountsModule = AccountsModule;
//# sourceMappingURL=accounts.module.js.map