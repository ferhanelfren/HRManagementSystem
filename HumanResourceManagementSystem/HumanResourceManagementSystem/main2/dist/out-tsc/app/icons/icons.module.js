"use strict";
exports.__esModule = true;
exports.IconsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var icons_routing_module_1 = require("./icons-routing.module");
var material_component_1 = require("./material/material.component");
var font_awesome_component_1 = require("./font-awesome/font-awesome.component");
var components_module_1 = require("../shared/components/components.module");
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [material_component_1.MaterialComponent, font_awesome_component_1.FontAwesomeComponent],
            imports: [common_1.CommonModule, icons_routing_module_1.IconsRoutingModule, components_module_1.ComponentsModule]
        })
    ], IconsModule);
    return IconsModule;
}());
exports.IconsModule = IconsModule;
//# sourceMappingURL=icons.module.js.map