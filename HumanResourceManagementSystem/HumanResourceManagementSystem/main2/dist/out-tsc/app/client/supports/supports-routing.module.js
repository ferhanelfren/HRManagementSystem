"use strict";
exports.__esModule = true;
exports.SupportsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page404_component_1 = require("src/app/authentication/page404/page404.component");
var ticket_details_component_1 = require("./ticket-details/ticket-details.component");
var tickets_component_1 = require("./tickets/tickets.component");
var routes = [
    {
        path: "tickets",
        component: tickets_component_1.TicketsComponent
    },
    {
        path: "ticketDetails",
        component: ticket_details_component_1.TicketDetailsComponent
    },
    { path: "**", component: page404_component_1.Page404Component },
];
var SupportsRoutingModule = /** @class */ (function () {
    function SupportsRoutingModule() {
    }
    SupportsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], SupportsRoutingModule);
    return SupportsRoutingModule;
}());
exports.SupportsRoutingModule = SupportsRoutingModule;
//# sourceMappingURL=supports-routing.module.js.map