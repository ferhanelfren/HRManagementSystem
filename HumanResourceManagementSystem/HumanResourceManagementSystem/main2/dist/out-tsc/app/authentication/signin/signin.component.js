"use strict";
exports.__esModule = true;
exports.SigninComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var SigninComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SigninComponent, _super);
    function SigninComponent(formBuilder, route, router, authService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.router = router;
        _this.authService = authService;
        _this.cancelRegister = new core_1.EventEmitter();
        _this.submitted = false;
        _this.loading = false;
        _this.error = '';
        _this.hide = true;
        _this.model = {};
        return _this;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.authForm = this.formBuilder.group({
            username: ['admin@software.com', forms_1.Validators.required],
            password: ['admin@123', forms_1.Validators.required]
        });
    };
    Object.defineProperty(SigninComponent.prototype, "f", {
        get: function () {
            return this.authForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    SigninComponent.prototype.adminSet = function () {
        var _a, _b;
        (_a = this.authForm.get('username')) === null || _a === void 0 ? void 0 : _a.setValue('admin@software.com');
        (_b = this.authForm.get('password')) === null || _b === void 0 ? void 0 : _b.setValue('admin@123');
    };
    SigninComponent.prototype.employeeSet = function () {
        var _a, _b;
        (_a = this.authForm.get('username')) === null || _a === void 0 ? void 0 : _a.setValue('employee@software.com');
        (_b = this.authForm.get('password')) === null || _b === void 0 ? void 0 : _b.setValue('employee@123');
    };
    SigninComponent.prototype.clientSet = function () {
        var _a, _b;
        (_a = this.authForm.get('username')) === null || _a === void 0 ? void 0 : _a.setValue('client@software.com');
        (_b = this.authForm.get('password')) === null || _b === void 0 ? void 0 : _b.setValue('client@123');
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.error = '';
        if (this.authForm.invalid) {
            this.error = 'Username and Password not valid !';
            return;
        }
        else {
            this.authService.login(this.model).subscribe({
                next: function (_) { return _this.router.navigateByUrl('/admin/dashboard/main'); }
            });
        }
        // this.submitted = true;
        // this.loading = true;
        // this.error = '';
        // if (this.authForm.invalid) {
        //   this.error = 'Username and Password not valid !';
        //   return;
        // } else {
        //   this.subs.sink = this.authService
        //     .login(this.f['username'].value, this.f['password'].value)
        //     .subscribe(
        //       (res) => {
        //         if (res) {
        //           setTimeout(() => {
        //             const role = this.authService.currentUserValue.role;
        //             if (role === Role.All || role === Role.Admin) {
        //               this.router.navigate(['/admin/dashboard/main']);
        //             } else if (role === Role.Employee) {
        //               this.router.navigate(['/employee/dashboard']);
        //             } else if (role === Role.Client) {
        //               this.router.navigate(['/client/dashboard']);
        //             } else {
        //               this.router.navigate(['/authentication/signin']);
        //             }
        //             this.loading = false;
        //           }, 1000);
        //         } else {
        //           this.error = 'Invalid Login';
        //         }
        //       },
        //       (error) => {
        //         this.error = error;
        //         this.submitted = false;
        //         this.loading = false;
        //       }
        //     );
        // }
    };
    tslib_1.__decorate([
        core_1.Output()
    ], SigninComponent.prototype, "cancelRegister");
    SigninComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
        })
    ], SigninComponent);
    return SigninComponent;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map