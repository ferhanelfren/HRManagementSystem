"use strict";
exports.__esModule = true;
exports.AppsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var chat_component_1 = require("./chat/chat.component");
var contact_grid_component_1 = require("./contact-grid/contact-grid.component");
var support_component_1 = require("./support/support.component");
var drag_drop_component_1 = require("./drag-drop/drag-drop.component");
var routes = [
    {
        path: "chat",
        component: chat_component_1.ChatComponent
    },
    {
        path: "contact-grid",
        component: contact_grid_component_1.ContactGridComponent
    },
    {
        path: "support",
        component: support_component_1.SupportComponent
    },
    {
        path: "dragdrop",
        component: drag_drop_component_1.DragDropComponent
    },
];
var AppsRoutingModule = /** @class */ (function () {
    function AppsRoutingModule() {
    }
    AppsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppsRoutingModule);
    return AppsRoutingModule;
}());
exports.AppsRoutingModule = AppsRoutingModule;
//# sourceMappingURL=apps-routing.module.js.map