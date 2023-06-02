"use strict";
exports.__esModule = true;
exports.AppComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        var _this = this;
        this._router = _router;
        this._router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof router_1.NavigationStart) {
                _this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
            }
            if (routerEvent instanceof router_1.NavigationEnd) {
                /* empty */
            }
            window.scrollTo(0, 0);
        });
    }
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map