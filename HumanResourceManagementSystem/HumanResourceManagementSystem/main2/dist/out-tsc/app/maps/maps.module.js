"use strict";
exports.__esModule = true;
exports.MapsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var maps_routing_module_1 = require("./maps-routing.module");
var google_component_1 = require("./google/google.component");
var google_maps_1 = require("@angular/google-maps");
var components_module_1 = require("../shared/components/components.module");
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [google_component_1.GoogleComponent],
            imports: [
                common_1.CommonModule,
                maps_routing_module_1.MapsRoutingModule,
                components_module_1.ComponentsModule,
                google_maps_1.GoogleMapsModule,
            ]
        })
    ], MapsModule);
    return MapsModule;
}());
exports.MapsModule = MapsModule;
//# sourceMappingURL=maps.module.js.map