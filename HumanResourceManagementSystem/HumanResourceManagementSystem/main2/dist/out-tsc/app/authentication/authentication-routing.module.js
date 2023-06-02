"use strict";
exports.__esModule = true;
exports.AuthenticationRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var signin_component_1 = require("./signin/signin.component");
var signup_component_1 = require("./signup/signup.component");
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var locked_component_1 = require("./locked/locked.component");
var page404_component_1 = require("./page404/page404.component");
var page500_component_1 = require("./page500/page500.component");
var routes = [
    {
        path: "",
        redirectTo: "signin",
        pathMatch: "full"
    },
    {
        path: "signin",
        component: signin_component_1.SigninComponent
    },
    {
        path: "signup",
        component: signup_component_1.SignupComponent
    },
    {
        path: "forgot-password",
        component: forgot_password_component_1.ForgotPasswordComponent
    },
    {
        path: "locked",
        component: locked_component_1.LockedComponent
    },
    {
        path: "page404",
        component: page404_component_1.Page404Component
    },
    {
        path: "page500",
        component: page500_component_1.Page500Component
    },
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());
exports.AuthenticationRoutingModule = AuthenticationRoutingModule;
//# sourceMappingURL=authentication-routing.module.js.map