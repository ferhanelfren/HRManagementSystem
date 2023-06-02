"use strict";
exports.__esModule = true;
exports.ThirdlevelRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var third1_component_1 = require("./third1/third1.component");
var routes = [
    {
        path: 'third1',
        component: third1_component_1.Third1Component
    },
];
var ThirdlevelRoutingModule = /** @class */ (function () {
    function ThirdlevelRoutingModule() {
    }
    ThirdlevelRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ThirdlevelRoutingModule);
    return ThirdlevelRoutingModule;
}());
exports.ThirdlevelRoutingModule = ThirdlevelRoutingModule;
//# sourceMappingURL=thirdlevel-routing.module.js.map