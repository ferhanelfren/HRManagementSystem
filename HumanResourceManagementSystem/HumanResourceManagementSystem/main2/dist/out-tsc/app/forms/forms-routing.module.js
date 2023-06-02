"use strict";
exports.__esModule = true;
exports.FormsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var form_examples_component_1 = require("./form-examples/form-examples.component");
var form_validations_component_1 = require("./form-validations/form-validations.component");
var wizard_component_1 = require("./wizard/wizard.component");
var editors_component_1 = require("./editors/editors.component");
var form_controls_component_1 = require("./form-controls/form-controls.component");
var advance_controls_component_1 = require("./advance-controls/advance-controls.component");
var routes = [
    {
        path: "",
        redirectTo: "form-controls",
        pathMatch: "full"
    },
    {
        path: "form-controls",
        component: form_controls_component_1.FormControlsComponent
    },
    {
        path: "advance-controls",
        component: advance_controls_component_1.AdvanceControlsComponent
    },
    {
        path: "form-example",
        component: form_examples_component_1.FormExamplesComponent
    },
    {
        path: "form-validation",
        component: form_validations_component_1.FormValidationsComponent
    },
    {
        path: "wizard",
        component: wizard_component_1.WizardComponent
    },
    {
        path: "editors",
        component: editors_component_1.EditorsComponent
    },
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());
exports.FormsRoutingModule = FormsRoutingModule;
//# sourceMappingURL=forms-routing.module.js.map