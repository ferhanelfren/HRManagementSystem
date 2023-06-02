"use strict";
exports.__esModule = true;
exports.ErrorInterceptor = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.catchError(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload();
            }
            var error = err.error.message || err.statusText;
            return rxjs_1.throwError(error);
        }));
    };
    ErrorInterceptor = tslib_1.__decorate([
        core_1.Injectable()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;
//# sourceMappingURL=error.interceptor.js.map