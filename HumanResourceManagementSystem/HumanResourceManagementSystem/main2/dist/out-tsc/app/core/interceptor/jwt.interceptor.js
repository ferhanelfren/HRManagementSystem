"use strict";
exports.__esModule = true;
exports.JwtInterceptor = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib_1.__decorate([
        core_1.Injectable()
    ], JwtInterceptor);
    return JwtInterceptor;
}());
exports.JwtInterceptor = JwtInterceptor;
//# sourceMappingURL=jwt.interceptor.js.map