"use strict";
exports.__esModule = true;
exports.LayoutModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var tabs_1 = require("@angular/material/tabs");
var icon_1 = require("@angular/material/icon");
var menu_1 = require("@angular/material/menu");
var button_1 = require("@angular/material/button");
var input_1 = require("@angular/material/input");
var badge_1 = require("@angular/material/badge");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                tabs_1.MatTabsModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                badge_1.MatBadgeModule,
            ],
            declarations: []
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map