"use strict";
exports.__esModule = true;
exports.LockedComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var role_1 = require("src/app/core/models/role");
var LockedComponent = /** @class */ (function () {
    function LockedComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.hide = true;
    }
    LockedComponent.prototype.ngOnInit = function () {
        this.authForm = this.formBuilder.group({
            password: ['', forms_1.Validators.required]
        });
        this.userImg = this.authService.currentUserValue.img;
        this.userFullName =
            this.authService.currentUserValue.firstName +
                ' ' +
                this.authService.currentUserValue.lastName;
    };
    Object.defineProperty(LockedComponent.prototype, "f", {
        get: function () {
            return this.authForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    LockedComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }
        else {
            var role = this.authService.currentUserValue.role;
            if (role === role_1.Role.All || role === role_1.Role.Admin) {
                this.router.navigate(['/admin/dashboard/main']);
            }
            else if (role === role_1.Role.Employee) {
                this.router.navigate(['/employee/dashboard']);
            }
            else if (role === role_1.Role.Client) {
                this.router.navigate(['/client/dashboard']);
            }
            else {
                this.router.navigate(['/authentication/signin']);
            }
        }
    };
    LockedComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-locked',
            templateUrl: './locked.component.html',
            styleUrls: ['./locked.component.scss']
        })
    ], LockedComponent);
    return LockedComponent;
}());
exports.LockedComponent = LockedComponent;
//# sourceMappingURL=locked.component.js.map