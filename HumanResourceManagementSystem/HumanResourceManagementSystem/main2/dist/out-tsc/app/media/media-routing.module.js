"use strict";
exports.__esModule = true;
exports.MediaRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var gallery_component_1 = require("./gallery/gallery.component");
var routes = [
    {
        path: "",
        redirectTo: "gallery",
        pathMatch: "full"
    },
    {
        path: "gallery",
        component: gallery_component_1.GalleryComponent
    },
];
var MediaRoutingModule = /** @class */ (function () {
    function MediaRoutingModule() {
    }
    MediaRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MediaRoutingModule);
    return MediaRoutingModule;
}());
exports.MediaRoutingModule = MediaRoutingModule;
//# sourceMappingURL=media-routing.module.js.map