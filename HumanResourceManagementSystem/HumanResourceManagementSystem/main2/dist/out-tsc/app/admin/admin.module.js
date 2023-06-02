"use strict";
exports.__esModule = true;
exports.AdminModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_routing_module_1 = require("./admin-routing.module");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            imports: [common_1.CommonModule, admin_routing_module_1.AdminRoutingModule]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map