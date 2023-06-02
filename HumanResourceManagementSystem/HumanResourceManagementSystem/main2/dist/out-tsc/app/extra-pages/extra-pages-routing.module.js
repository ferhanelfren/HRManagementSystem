"use strict";
exports.__esModule = true;
exports.ExtraPagesRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var profile_component_1 = require("./profile/profile.component");
var pricing_component_1 = require("./pricing/pricing.component");
var invoice_component_1 = require("./invoice/invoice.component");
var faqs_component_1 = require("./faqs/faqs.component");
var blank_component_1 = require("./blank/blank.component");
var routes = [
    {
        path: "profile",
        component: profile_component_1.ProfileComponent
    },
    {
        path: "pricing",
        component: pricing_component_1.PricingComponent
    },
    {
        path: "invoice",
        component: invoice_component_1.InvoiceComponent
    },
    {
        path: "faqs",
        component: faqs_component_1.FaqsComponent
    },
    {
        path: "blank",
        component: blank_component_1.BlankComponent
    },
];
var ExtraPagesRoutingModule = /** @class */ (function () {
    function ExtraPagesRoutingModule() {
    }
    ExtraPagesRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ExtraPagesRoutingModule);
    return ExtraPagesRoutingModule;
}());
exports.ExtraPagesRoutingModule = ExtraPagesRoutingModule;
//# sourceMappingURL=extra-pages-routing.module.js.map