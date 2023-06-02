"use strict";
exports.__esModule = true;
exports.AuthenticationModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var authentication_routing_module_1 = require("./authentication-routing.module");
var page500_component_1 = require("./page500/page500.component");
var page404_component_1 = require("./page404/page404.component");
var signin_component_1 = require("./signin/signin.component");
var signup_component_1 = require("./signup/signup.component");
var locked_component_1 = require("./locked/locked.component");
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var forms_2 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                page500_component_1.Page500Component,
                page404_component_1.Page404Component,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                locked_component_1.LockedComponent,
                forgot_password_component_1.ForgotPasswordComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                authentication_routing_module_1.AuthenticationRoutingModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map