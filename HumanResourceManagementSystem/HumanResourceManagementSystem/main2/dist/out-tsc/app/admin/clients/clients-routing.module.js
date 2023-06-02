"use strict";
exports.__esModule = true;
exports.ClientRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_client_component_1 = require("./add-client/add-client.component");
var edit_client_component_1 = require("./edit-client/edit-client.component");
var page404_component_1 = require("../../authentication/page404/page404.component");
var all_clients_component_1 = require("./all-clients/all-clients.component");
var routes = [
    {
        path: "all-clients",
        component: all_clients_component_1.AllclientComponent
    },
    {
        path: "add-client",
        component: add_client_component_1.AddClientComponent
    },
    {
        path: "edit-client",
        component: edit_client_component_1.EditClientComponent
    },
    { path: "**", component: page404_component_1.Page404Component },
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());
exports.ClientRoutingModule = ClientRoutingModule;
//# sourceMappingURL=clients-routing.module.js.map