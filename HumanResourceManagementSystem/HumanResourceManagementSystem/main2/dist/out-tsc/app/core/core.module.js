"use strict";
exports.__esModule = true;
exports.CoreModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var rightsidebar_service_1 = require("./service/rightsidebar.service");
var auth_guard_1 = require("./guard/auth.guard");
var auth_service_1 = require("./service/auth.service");
var module_import_guard_1 = require("./guard/module-import.guard");
var direction_service_1 = require("./service/direction.service");
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    CoreModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            imports: [common_1.CommonModule],
            providers: [rightsidebar_service_1.RightSidebarService, auth_guard_1.AuthGuard, auth_service_1.AuthService, direction_service_1.DirectionService]
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__param(0, core_1.SkipSelf())
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map