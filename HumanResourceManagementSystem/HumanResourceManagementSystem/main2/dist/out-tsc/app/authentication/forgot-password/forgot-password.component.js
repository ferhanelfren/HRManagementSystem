"use strict";
exports.__esModule = true;
exports.ForgotPasswordComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.authForm = this.formBuilder.group({
            email: [
                '',
                [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(5)],
            ]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () {
            return this.authForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/dashboard/main']);
        }
    };
    ForgotPasswordComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot-password.component.js.map