"use strict";
exports.__esModule = true;
exports.ConfigService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.setConfigData();
    }
    ConfigService.prototype.setConfigData = function () {
        this.configData = {
            layout: {
                rtl: false,
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                    collapsed: false,
                    backgroundColor: 'light'
                }
            }
        };
    };
    ConfigService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map