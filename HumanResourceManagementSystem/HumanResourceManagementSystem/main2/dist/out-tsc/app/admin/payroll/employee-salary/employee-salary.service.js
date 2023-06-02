"use strict";
exports.__esModule = true;
exports.EmployeeSalaryService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var EmployeeSalaryService = /** @class */ (function (_super) {
    tslib_1.__extends(EmployeeSalaryService, _super);
    function EmployeeSalaryService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/employee-salary.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(EmployeeSalaryService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    EmployeeSalaryService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    EmployeeSalaryService.prototype.getAllEmployeeSalarys = function () {
        var _this = this;
        this.subs.sink = this.httpClient
            .get(this.API_URL)
            .subscribe({
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
    EmployeeSalaryService.prototype.addEmployeeSalary = function (employeeSalary) {
        this.dialogData = employeeSalary;
        // this.httpClient.post(this.API_URL, employeeSalary)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = employeeSalary;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    EmployeeSalaryService.prototype.updateEmployeeSalary = function (employeeSalary) {
        this.dialogData = employeeSalary;
        // this.httpClient.put(this.API_URL + employeeSalary.id, employeeSalary)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = employeeSalary;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    EmployeeSalaryService.prototype.deleteEmployeeSalary = function (id) {
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
    EmployeeSalaryService = tslib_1.__decorate([
        core_1.Injectable()
    ], EmployeeSalaryService);
    return EmployeeSalaryService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.EmployeeSalaryService = EmployeeSalaryService;
//# sourceMappingURL=employee-salary.service.js.map