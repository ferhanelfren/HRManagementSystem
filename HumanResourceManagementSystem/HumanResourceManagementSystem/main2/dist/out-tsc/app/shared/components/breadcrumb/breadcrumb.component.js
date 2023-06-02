"use strict";
exports.__esModule = true;
exports.BreadcrumbComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        //constructor
    }
    tslib_1.__decorate([
        core_1.Input()
    ], BreadcrumbComponent.prototype, "title");
    tslib_1.__decorate([
        core_1.Input()
    ], BreadcrumbComponent.prototype, "items");
    tslib_1.__decorate([
        core_1.Input()
    ], BreadcrumbComponent.prototype, "active_item");
    BreadcrumbComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.scss']
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.component.js.map