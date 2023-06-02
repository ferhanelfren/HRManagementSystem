"use strict";
exports.__esModule = true;
exports.TimelineModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var timeline_routing_module_1 = require("./timeline-routing.module");
var timeline1_component_1 = require("./timeline1/timeline1.component");
var timeline2_component_1 = require("./timeline2/timeline2.component");
var components_module_1 = require("../shared/components/components.module");
var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [timeline1_component_1.Timeline1Component, timeline2_component_1.Timeline2Component],
            imports: [common_1.CommonModule, timeline_routing_module_1.TimelineRoutingModule, components_module_1.ComponentsModule]
        })
    ], TimelineModule);
    return TimelineModule;
}());
exports.TimelineModule = TimelineModule;
//# sourceMappingURL=timeline.module.js.map