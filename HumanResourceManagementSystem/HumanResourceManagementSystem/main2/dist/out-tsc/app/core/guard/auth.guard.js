"use strict";
exports.__esModule = true;
exports.AuthGuard = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.currentUserValue) {
            var userRole = this.authService.currentUserValue.role;
            if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
                this.router.navigate(['/authentication/signin']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/authentication/signin']);
        return false;
    };
    AuthGuard = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map