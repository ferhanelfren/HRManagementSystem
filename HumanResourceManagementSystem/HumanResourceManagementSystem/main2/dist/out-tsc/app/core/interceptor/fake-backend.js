"use strict";
exports.__esModule = true;
exports.fakeBackendProvider = exports.FakeBackendInterceptor = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var role_1 = require("../models/role");
var users = [
    {
        id: 1,
        img: 'assets/images/user/admin.jpg',
        username: 'admin@software.com',
        password: 'admin@123',
        firstName: 'Sarah',
        lastName: 'Smith',
        role: role_1.Role.Admin,
        token: 'admin-token'
    },
    {
        id: 2,
        img: 'assets/images/user/employee.jpg',
        username: 'employee@software.com',
        password: 'employee@123',
        firstName: 'Ashton',
        lastName: 'Cox',
        role: role_1.Role.Employee,
        token: 'employee-token'
    },
    {
        id: 3,
        img: 'assets/images/user/client.jpg',
        username: 'client@software.com',
        password: 'client@123',
        firstName: 'Cara',
        lastName: 'Stevens',
        role: role_1.Role.Client,
        token: 'client-token'
    },
];
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var url = request.url, method = request.method, headers = request.headers, body = request.body;
        // wrap in delayed observable to simulate server api call
        return rxjs_1.of(null).pipe(operators_1.mergeMap(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith('/authenticate') && method === 'POST':
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            var username = body.username, password = body.password;
            var user = users.find(function (x) { return x.username === username && x.password === password; });
            if (!user) {
                return error('Username or password is incorrect');
            }
            return ok({
                id: user.id,
                img: user.img,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token
            });
        }
        // helper functions
        function ok(body) {
            return rxjs_1.of(new http_1.HttpResponse({ status: 200, body: body }));
        }
        function error(message) {
            return rxjs_1.throwError({ error: { message: message } });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        function unauthorized() {
            return rxjs_1.throwError({ status: 401, error: { message: 'Unauthorised' } });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    };
    FakeBackendInterceptor = tslib_1.__decorate([
        core_1.Injectable()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());
exports.FakeBackendInterceptor = FakeBackendInterceptor;
exports.fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: http_1.HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
//# sourceMappingURL=fake-backend.js.map