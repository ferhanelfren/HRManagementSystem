"use strict";
exports.__esModule = true;
exports.SignupComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, route, router, authService, toastr) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.cancelRegister = new core_1.EventEmitter();
        this.submitted = false;
        this.hide = true;
        this.chide = true;
        this.model = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.authForm = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            email: [
                '',
                [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(5)],
            ],
            password: ['', forms_1.Validators.required],
            cpassword: ['', forms_1.Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        get: function () {
            return this.authForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/admin/dashboard/main']);
        }
    };
    SignupComponent.prototype.onRegister = function () {
        var _this = this;
        this.authService.register(this.model).subscribe({
            next: function () {
                _this.toastr.success;
                _this.router.navigate(['/authentication/signin']);
            },
            error: function (error) { return _this.toastr.error(error.error); }
        });
    };
    SignupComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    tslib_1.__decorate([
        core_1.Output()
    ], SignupComponent.prototype, "cancelRegister");
    SignupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map