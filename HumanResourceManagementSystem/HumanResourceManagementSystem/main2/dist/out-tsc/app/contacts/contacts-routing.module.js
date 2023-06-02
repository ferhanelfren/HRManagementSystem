"use strict";
exports.__esModule = true;
exports.AdvanceTableRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contacts_component_1 = require("./contacts.component");
var routes = [
    {
        path: "",
        component: contacts_component_1.ContactsComponent
    },
];
var AdvanceTableRoutingModule = /** @class */ (function () {
    function AdvanceTableRoutingModule() {
    }
    AdvanceTableRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AdvanceTableRoutingModule);
    return AdvanceTableRoutingModule;
}());
exports.AdvanceTableRoutingModule = AdvanceTableRoutingModule;
//# sourceMappingURL=contacts-routing.module.js.map