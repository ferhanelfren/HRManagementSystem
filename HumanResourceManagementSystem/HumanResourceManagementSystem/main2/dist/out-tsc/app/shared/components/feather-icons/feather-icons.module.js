"use strict";
exports.__esModule = true;
exports.FeatherIconsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var feather_icons_component_1 = require("./feather-icons.component");
var angular_feather_1 = require("angular-feather");
var icons_1 = require("angular-feather/icons");
var FeatherIconsModule = /** @class */ (function () {
    function FeatherIconsModule() {
    }
    FeatherIconsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, angular_feather_1.FeatherModule.pick(icons_1.allIcons)],
            exports: [feather_icons_component_1.FeatherIconsComponent, angular_feather_1.FeatherModule],
            declarations: [feather_icons_component_1.FeatherIconsComponent]
        })
    ], FeatherIconsModule);
    return FeatherIconsModule;
}());
exports.FeatherIconsModule = FeatherIconsModule;
//# sourceMappingURL=feather-icons.module.js.map