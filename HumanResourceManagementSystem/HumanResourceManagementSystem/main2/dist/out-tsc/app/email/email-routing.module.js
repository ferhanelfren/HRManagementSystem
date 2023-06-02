"use strict";
exports.__esModule = true;
exports.EmailRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var inbox_component_1 = require("./inbox/inbox.component");
var compose_component_1 = require("./compose/compose.component");
var read_mail_component_1 = require("./read-mail/read-mail.component");
var routes = [
    {
        path: "inbox",
        component: inbox_component_1.InboxComponent
    },
    {
        path: "compose",
        component: compose_component_1.ComposeComponent
    },
    {
        path: "read-mail",
        component: read_mail_component_1.ReadMailComponent
    },
];
var EmailRoutingModule = /** @class */ (function () {
    function EmailRoutingModule() {
    }
    EmailRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], EmailRoutingModule);
    return EmailRoutingModule;
}());
exports.EmailRoutingModule = EmailRoutingModule;
//# sourceMappingURL=email-routing.module.js.map