"use strict";
exports.__esModule = true;
exports.ExtraPagesModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var extra_pages_routing_module_1 = require("./extra-pages-routing.module");
var profile_component_1 = require("./profile/profile.component");
var pricing_component_1 = require("./pricing/pricing.component");
var invoice_component_1 = require("./invoice/invoice.component");
var faqs_component_1 = require("./faqs/faqs.component");
var blank_component_1 = require("./blank/blank.component");
var expansion_1 = require("@angular/material/expansion");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var checkbox_1 = require("@angular/material/checkbox");
var tabs_1 = require("@angular/material/tabs");
var components_module_1 = require("../shared/components/components.module");
var ExtraPagesModule = /** @class */ (function () {
    function ExtraPagesModule() {
    }
    ExtraPagesModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                profile_component_1.ProfileComponent,
                pricing_component_1.PricingComponent,
                invoice_component_1.InvoiceComponent,
                faqs_component_1.FaqsComponent,
                blank_component_1.BlankComponent,
            ],
            imports: [
                common_1.CommonModule,
                extra_pages_routing_module_1.ExtraPagesRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                expansion_1.MatExpansionModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                checkbox_1.MatCheckboxModule,
                tabs_1.MatTabsModule,
                components_module_1.ComponentsModule,
            ]
        })
    ], ExtraPagesModule);
    return ExtraPagesModule;
}());
exports.ExtraPagesModule = ExtraPagesModule;
//# sourceMappingURL=extra-pages.module.js.map