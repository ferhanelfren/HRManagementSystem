"use strict";
exports.__esModule = true;
exports.FeatherIconsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FeatherIconsComponent = /** @class */ (function () {
    function FeatherIconsComponent() {
        // constructor
    }
    tslib_1.__decorate([
        core_1.Input()
    ], FeatherIconsComponent.prototype, "icon");
    tslib_1.__decorate([
        core_1.Input()
    ], FeatherIconsComponent.prototype, "class");
    FeatherIconsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-feather-icons',
            templateUrl: './feather-icons.component.html',
            styleUrls: ['./feather-icons.component.scss']
        })
    ], FeatherIconsComponent);
    return FeatherIconsComponent;
}());
exports.FeatherIconsComponent = FeatherIconsComponent;
//# sourceMappingURL=feather-icons.component.js.map