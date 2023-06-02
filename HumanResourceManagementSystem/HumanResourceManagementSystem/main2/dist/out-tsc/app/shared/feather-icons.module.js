"use strict";
exports.__esModule = true;
exports.FeatherIconsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_feather_1 = require("angular-feather");
var icons_1 = require("angular-feather/icons");
// Select some icons (use an object, not an array)
var FeatherIconsModule = /** @class */ (function () {
    function FeatherIconsModule() {
    }
    FeatherIconsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [angular_feather_1.FeatherModule.pick(icons_1.allIcons)],
            exports: [angular_feather_1.FeatherModule]
        })
    ], FeatherIconsModule);
    return FeatherIconsModule;
}());
exports.FeatherIconsModule = FeatherIconsModule;
//# sourceMappingURL=feather-icons.module.js.map