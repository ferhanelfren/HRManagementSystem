"use strict";
exports.__esModule = true;
exports.TimelineRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var timeline1_component_1 = require("./timeline1/timeline1.component");
var timeline2_component_1 = require("./timeline2/timeline2.component");
var routes = [
    {
        path: "",
        redirectTo: "timeline1",
        pathMatch: "full"
    },
    {
        path: "timeline1",
        component: timeline1_component_1.Timeline1Component
    },
    {
        path: "timeline2",
        component: timeline2_component_1.Timeline2Component
    },
];
var TimelineRoutingModule = /** @class */ (function () {
    function TimelineRoutingModule() {
    }
    TimelineRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TimelineRoutingModule);
    return TimelineRoutingModule;
}());
exports.TimelineRoutingModule = TimelineRoutingModule;
//# sourceMappingURL=timeline-routing.module.js.map