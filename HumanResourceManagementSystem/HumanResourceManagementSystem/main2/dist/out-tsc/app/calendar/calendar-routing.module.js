"use strict";
exports.__esModule = true;
exports.CalendarRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var calendar_component_1 = require("./calendar.component");
var routes = [
    {
        path: "",
        component: calendar_component_1.CalendarComponent
    },
];
var CalendarRoutingModule = /** @class */ (function () {
    function CalendarRoutingModule() {
    }
    CalendarRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], CalendarRoutingModule);
    return CalendarRoutingModule;
}());
exports.CalendarRoutingModule = CalendarRoutingModule;
//# sourceMappingURL=calendar-routing.module.js.map