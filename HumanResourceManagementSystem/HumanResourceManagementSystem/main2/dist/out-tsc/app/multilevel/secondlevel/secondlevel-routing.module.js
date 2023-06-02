"use strict";
exports.__esModule = true;
exports.SecondLevelRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var second1_component_1 = require("./second1/second1.component");
var second2_component_1 = require("./second2/second2.component");
var routes = [
    {
        path: "second1",
        component: second1_component_1.Second1Component
    },
    {
        path: "second2",
        component: second2_component_1.Second2Component
    },
];
var SecondLevelRoutingModule = /** @class */ (function () {
    function SecondLevelRoutingModule() {
    }
    SecondLevelRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], SecondLevelRoutingModule);
    return SecondLevelRoutingModule;
}());
exports.SecondLevelRoutingModule = SecondLevelRoutingModule;
//# sourceMappingURL=secondlevel-routing.module.js.map