"use strict";
exports.__esModule = true;
exports.MainLayoutComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(directoryService, configService) {
        var _this = this;
        this.directoryService = directoryService;
        this.configService = configService;
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
    }
    MainLayoutComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-main-layout',
            templateUrl: './main-layout.component.html',
            styleUrls: []
        })
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());
exports.MainLayoutComponent = MainLayoutComponent;
//# sourceMappingURL=main-layout.component.js.map