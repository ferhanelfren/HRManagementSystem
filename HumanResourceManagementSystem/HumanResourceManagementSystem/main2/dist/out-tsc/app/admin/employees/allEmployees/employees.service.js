"use strict";
exports.__esModule = true;
exports.EmployeesService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var EmployeesService = /** @class */ (function (_super) {
    tslib_1.__extends(EmployeesService, _super);
    function EmployeesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/employees.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(EmployeesService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    EmployeesService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    EmployeesService.prototype.getAllEmployeess = function () {
        var _this = this;
        this.subs.sink = this.httpClient.get(this.API_URL).subscribe({
            next: function (data) {
                _this.isTblLoading = false;
                _this.dataChange.next(data);
            },
            error: function (error) {
                _this.isTblLoading = false;
                console.log(error.name + ' ' + error.message);
            }
        });
    };
    EmployeesService.prototype.addEmployees = function (employees) {
        this.dialogData = employees;
        // this.httpClient.post(this.API_URL, employees)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = employees;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    EmployeesService.prototype.updateEmployees = function (employees) {
        this.dialogData = employees;
        // this.httpClient.put(this.API_URL + employees.id, employees)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = employees;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    EmployeesService.prototype.deleteEmployees = function (id) {
        console.log(id);
        // this.httpClient.delete(this.API_URL + id)
        //     .subscribe({
        //       next: (data) => {
        //         console.log(id);
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    EmployeesService = tslib_1.__decorate([
        core_1.Injectable()
    ], EmployeesService);
    return EmployeesService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map