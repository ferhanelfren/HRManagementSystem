"use strict";
exports.__esModule = true;
exports.IconsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var material_component_1 = require("./material/material.component");
var font_awesome_component_1 = require("./font-awesome/font-awesome.component");
var routes = [
    {
        path: "",
        redirectTo: "material",
        pathMatch: "full"
    },
    {
        path: "material",
        component: material_component_1.MaterialComponent
    },
    {
        path: "font-awesome",
        component: font_awesome_component_1.FontAwesomeComponent
    },
];
var IconsRoutingModule = /** @class */ (function () {
    function IconsRoutingModule() {
    }
    IconsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], IconsRoutingModule);
    return IconsRoutingModule;
}());
exports.IconsRoutingModule = IconsRoutingModule;
//# sourceMappingURL=icons-routing.module.js.map