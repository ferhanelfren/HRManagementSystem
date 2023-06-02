"use strict";
exports.__esModule = true;
exports.AccountsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_payment_component_1 = require("./add-payment/add-payment.component");
var invoice_component_1 = require("./invoice/invoice.component");
var allpayment_component_1 = require("./allpayment/allpayment.component");
var page404_component_1 = require("../../authentication/page404/page404.component");
var routes = [
    {
        path: "all-payment",
        component: allpayment_component_1.AllpaymentComponent
    },
    {
        path: "add-payment",
        component: add_payment_component_1.AddPaymentComponent
    },
    {
        path: "invoice",
        component: invoice_component_1.InvoiceComponent
    },
    { path: "**", component: page404_component_1.Page404Component },
];
var AccountsRoutingModule = /** @class */ (function () {
    function AccountsRoutingModule() {
    }
    AccountsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AccountsRoutingModule);
    return AccountsRoutingModule;
}());
exports.AccountsRoutingModule = AccountsRoutingModule;
//# sourceMappingURL=accounts-routing.module.js.map