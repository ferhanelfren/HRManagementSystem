"use strict";
exports.__esModule = true;
exports.FormModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_routing_module_1 = require("./forms-routing.module");
var editors_component_1 = require("./editors/editors.component");
var form_examples_component_1 = require("./form-examples/form-examples.component");
var form_validations_component_1 = require("./form-validations/form-validations.component");
var wizard_component_1 = require("./wizard/wizard.component");
var forms_1 = require("@angular/forms");
var form_controls_component_1 = require("./form-controls/form-controls.component");
var advance_controls_component_1 = require("./advance-controls/advance-controls.component");
var ckeditor5_angular_1 = require("@ckeditor/ckeditor5-angular");
var autocomplete_1 = require("@angular/material/autocomplete");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var card_1 = require("@angular/material/card");
var checkbox_1 = require("@angular/material/checkbox");
var datepicker_1 = require("@angular/material/datepicker");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var grid_list_1 = require("@angular/material/grid-list");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var radio_1 = require("@angular/material/radio");
var select_1 = require("@angular/material/select");
var sidenav_1 = require("@angular/material/sidenav");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var slider_1 = require("@angular/material/slider");
var sort_1 = require("@angular/material/sort");
var stepper_1 = require("@angular/material/stepper");
var toolbar_1 = require("@angular/material/toolbar");
var tooltip_1 = require("@angular/material/tooltip");
var ngx_mask_1 = require("ngx-mask");
var angular_datetime_picker_1 = require("@danielmoncada/angular-datetime-picker");
var components_module_1 = require("../shared/components/components.module");
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                editors_component_1.EditorsComponent,
                form_examples_component_1.FormExamplesComponent,
                form_validations_component_1.FormValidationsComponent,
                wizard_component_1.WizardComponent,
                form_controls_component_1.FormControlsComponent,
                advance_controls_component_1.AdvanceControlsComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_routing_module_1.FormsRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ckeditor5_angular_1.CKEditorModule,
                autocomplete_1.MatAutocompleteModule,
                button_1.MatButtonModule,
                button_toggle_1.MatButtonToggleModule,
                card_1.MatCardModule,
                checkbox_1.MatCheckboxModule,
                datepicker_1.MatDatepickerModule,
                dialog_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                grid_list_1.MatGridListModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                list_1.MatListModule,
                menu_1.MatMenuModule,
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                sidenav_1.MatSidenavModule,
                slide_toggle_1.MatSlideToggleModule,
                slider_1.MatSliderModule,
                sort_1.MatSortModule,
                stepper_1.MatStepperModule,
                toolbar_1.MatToolbarModule,
                tooltip_1.MatTooltipModule,
                angular_datetime_picker_1.OwlDateTimeModule,
                angular_datetime_picker_1.OwlNativeDateTimeModule,
                ngx_mask_1.NgxMaskModule,
                components_module_1.ComponentsModule,
            ]
        })
    ], FormModule);
    return FormModule;
}());
exports.FormModule = FormModule;
//# sourceMappingURL=forms.module.js.map