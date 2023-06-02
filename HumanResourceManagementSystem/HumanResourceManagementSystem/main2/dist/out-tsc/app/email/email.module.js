"use strict";
exports.__esModule = true;
exports.EmailModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var email_routing_module_1 = require("./email-routing.module");
var compose_component_1 = require("./compose/compose.component");
var inbox_component_1 = require("./inbox/inbox.component");
var read_mail_component_1 = require("./read-mail/read-mail.component");
var ckeditor5_angular_1 = require("@ckeditor/ckeditor5-angular");
var checkbox_1 = require("@angular/material/checkbox");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var components_module_1 = require("../shared/components/components.module");
var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [compose_component_1.ComposeComponent, inbox_component_1.InboxComponent, read_mail_component_1.ReadMailComponent],
            imports: [
                common_1.CommonModule,
                email_routing_module_1.EmailRoutingModule,
                checkbox_1.MatCheckboxModule,
                ckeditor5_angular_1.CKEditorModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                components_module_1.ComponentsModule,
            ]
        })
    ], EmailModule);
    return EmailModule;
}());
exports.EmailModule = EmailModule;
//# sourceMappingURL=email.module.js.map