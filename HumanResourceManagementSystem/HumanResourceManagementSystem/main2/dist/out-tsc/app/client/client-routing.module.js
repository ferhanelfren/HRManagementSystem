"use strict";
exports.__esModule = true;
exports.ClientRoutingModule = void 0;
var tslib_1 = require("tslib");
var page404_component_1 = require("../authentication/page404/page404.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var billing_component_1 = require("./billing/billing.component");
var settings_component_1 = require("./settings/settings.component");
var chat_component_1 = require("./chat/chat.component");
var routes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'projects',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./projects/projects.module'); }).then(function (m) { return m.ProjectsModule; });
        }
    },
    {
        path: 'supports',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./supports/supports.module'); }).then(function (m) { return m.SupportsModule; });
        }
    },
    {
        path: 'billing',
        component: billing_component_1.BillingComponent
    },
    {
        path: 'chat',
        component: chat_component_1.ChatComponent
    },
    {
        path: 'settings',
        component: settings_component_1.SettingsComponent
    },
    { path: '**', component: page404_component_1.Page404Component },
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
//# sourceMappingURL=client-routing.module.js.map