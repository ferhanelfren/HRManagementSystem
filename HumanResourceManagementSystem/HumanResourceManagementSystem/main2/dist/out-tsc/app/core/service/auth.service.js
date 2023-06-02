"use strict";
exports.__esModule = true;
exports.AuthService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    // private currentUserSource = new BehaviorSubject<User | null> (null);
    // currentUser$ = this.currentUserSource.asObservable();
    function AuthService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.currentUserSource = new rxjs_1.BehaviorSubject(null);
        this.currentUser$ = this.currentUserSource.asObservable();
        this.baseURL = 'https://localhost:5001/api/';
        this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    // login(username: string, password: string) {
    //   return this.http
    //     .post<User>(`${environment.apiUrl}/authenticate`, {
    //       username, 
    //       password,
    //     })
    //     .pipe(
    //       map((user) => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('currentUser', JSON.stringify(user));
    //         this.currentUserSubject.next(user);
    //         return user;
    //       })
    //     );
    // }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseURL + 'Authentication/login', model).pipe(operators_1.map(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                _this.currentUserSource.next(user);
            }
        }));
    };
    AuthService.prototype.logout = function () {
        //remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(this.currentUserValue);
        return rxjs_1.of({ success: false });
    };
    AuthService.prototype.register = function (model) {
        var _this = this;
        return this.http.post(this.baseURL + 'Authentication/register', model).pipe(operators_1.map(function (user) {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                _this.currentUserSource.next(user);
            }
            return user;
        }));
    };
    AuthService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map