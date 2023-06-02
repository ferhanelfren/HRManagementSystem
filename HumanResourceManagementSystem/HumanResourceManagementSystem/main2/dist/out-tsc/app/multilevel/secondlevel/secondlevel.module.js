"use strict";
exports.__esModule = true;
exports.SecondLevelModule = void 0;
var tslib_1 = require("tslib");
var second1_component_1 = require("./second1/second1.component");
var second2_component_1 = require("./second2/second2.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var secondlevel_routing_module_1 = require("./secondlevel-routing.module");
var components_module_1 = require("src/app/shared/components/components.module");
var SecondLevelModule = /** @class */ (function () {
    function SecondLevelModule() {
    }
    SecondLevelModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [second1_component_1.Second1Component, second2_component_1.Second2Component],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                secondlevel_routing_module_1.SecondLevelRoutingModule,
                components_module_1.ComponentsModule,
            ]
        })
    ], SecondLevelModule);
    return SecondLevelModule;
}());
exports.SecondLevelModule = SecondLevelModule;
//# sourceMappingURL=secondlevel.module.js.map