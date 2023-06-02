"use strict";
exports.__esModule = true;
exports.MultilevelModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var multilevel_routing_module_1 = require("./multilevel-routing.module");
var first1_component_1 = require("./first1/first1.component");
var first2_component_1 = require("./first2/first2.component");
var first3_component_1 = require("./first3/first3.component");
var components_module_1 = require("../shared/components/components.module");
var MultilevelModule = /** @class */ (function () {
    function MultilevelModule() {
    }
    MultilevelModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [first1_component_1.First1Component, first2_component_1.First2Component, first3_component_1.First3Component],
            imports: [common_1.CommonModule, multilevel_routing_module_1.MultilevelRoutingModule, components_module_1.ComponentsModule]
        })
    ], MultilevelModule);
    return MultilevelModule;
}());
exports.MultilevelModule = MultilevelModule;
//# sourceMappingURL=multilevel.module.js.map