"use strict";
exports.__esModule = true;
exports.AuthLayoutComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(document, directoryService, configService, renderer) {
        var _this = this;
        this.document = document;
        this.directoryService = directoryService;
        this.configService = configService;
        this.renderer = renderer;
        this.config = this.configService.configData;
        this.directoryService.currentData.subscribe(function (currentData) {
            if (currentData) {
                _this.direction = currentData === 'ltr' ? 'ltr' : 'rtl';
            }
            else {
                if (localStorage.getItem('isRtl')) {
                    if (localStorage.getItem('isRtl') === 'true') {
                        _this.direction = 'rtl';
                    }
                    else if (localStorage.getItem('isRtl') === 'false') {
                        _this.direction = 'ltr';
                    }
                }
                else {
                    if (_this.config) {
                        if (_this.config.layout.rtl === true) {
                            _this.direction = 'rtl';
                            localStorage.setItem('isRtl', 'true');
                        }
                        else {
                            _this.direction = 'ltr';
                            localStorage.setItem('isRtl', 'false');
                        }
                    }
                }
            }
        });
        // set theme on startup
        if (localStorage.getItem('theme')) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
    }
    AuthLayoutComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-auth-layout',
            templateUrl: './auth-layout.component.html',
            styleUrls: []
        }),
        tslib_1.__param(0, core_1.Inject(common_1.DOCUMENT))
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());
exports.AuthLayoutComponent = AuthLayoutComponent;
//# sourceMappingURL=auth-layout.component.js.map