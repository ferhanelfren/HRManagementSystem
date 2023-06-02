"use strict";
exports.__esModule = true;
exports.LeadsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var leads_component_1 = require("./leads.component");
var routes = [
    {
        path: "",
        component: leads_component_1.LeadsComponent
    },
];
var LeadsRoutingModule = /** @class */ (function () {
    function LeadsRoutingModule() {
    }
    LeadsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], LeadsRoutingModule);
    return LeadsRoutingModule;
}());
exports.LeadsRoutingModule = LeadsRoutingModule;
//# sourceMappingURL=leads-routing.module.js.map