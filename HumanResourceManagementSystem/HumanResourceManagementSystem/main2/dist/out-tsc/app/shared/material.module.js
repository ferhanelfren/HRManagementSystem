"use strict";
exports.__esModule = true;
exports.MaterialModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var ngx_mask_1 = require("ngx-mask");
var tooltip_1 = require("@angular/material/tooltip");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var button_toggle_1 = require("@angular/material/button-toggle");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var materialModules = [
    button_1.MatButtonModule,
    input_1.MatInputModule,
    list_1.MatListModule,
    icon_1.MatIconModule,
    tooltip_1.MatTooltipModule,
    datepicker_1.MatDatepickerModule,
    core_2.MatNativeDateModule,
    menu_1.MatMenuModule,
    ngx_mask_1.NgxMaskModule.forRoot(),
    button_toggle_1.MatButtonToggleModule,
    form_field_1.MatFormFieldModule,
    slide_toggle_1.MatSlideToggleModule,
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            imports: [materialModules],
            exports: [materialModules]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=material.module.js.map