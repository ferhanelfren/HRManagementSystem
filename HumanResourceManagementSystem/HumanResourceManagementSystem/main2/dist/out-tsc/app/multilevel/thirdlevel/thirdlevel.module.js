"use strict";
exports.__esModule = true;
exports.ThirdlevelModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var thirdlevel_routing_module_1 = require("./thirdlevel-routing.module");
var third1_component_1 = require("./third1/third1.component");
var components_module_1 = require("./../../shared/components/components.module");
var ThirdlevelModule = /** @class */ (function () {
    function ThirdlevelModule() {
    }
    ThirdlevelModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [third1_component_1.Third1Component],
            imports: [common_1.CommonModule, thirdlevel_routing_module_1.ThirdlevelRoutingModule, components_module_1.ComponentsModule]
        })
    ], ThirdlevelModule);
    return ThirdlevelModule;
}());
exports.ThirdlevelModule = ThirdlevelModule;
//# sourceMappingURL=thirdlevel.module.js.map