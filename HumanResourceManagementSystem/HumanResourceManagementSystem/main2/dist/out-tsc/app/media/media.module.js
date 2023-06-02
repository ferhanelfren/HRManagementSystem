"use strict";
exports.__esModule = true;
exports.MediaModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var media_routing_module_1 = require("./media-routing.module");
var gallery_component_1 = require("./gallery/gallery.component");
var ng_image_fullscreen_view_1 = require("ng-image-fullscreen-view");
var components_module_1 = require("../shared/components/components.module");
var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [gallery_component_1.GalleryComponent],
            imports: [
                common_1.CommonModule,
                media_routing_module_1.MediaRoutingModule,
                ng_image_fullscreen_view_1.NgImageFullscreenViewModule,
                components_module_1.ComponentsModule,
            ]
        })
    ], MediaModule);
    return MediaModule;
}());
exports.MediaModule = MediaModule;
//# sourceMappingURL=media.module.js.map