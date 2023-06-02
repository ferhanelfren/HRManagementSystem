"use strict";
exports.__esModule = true;
exports.EmployeeSalary = void 0;
var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(employeeSalary) {
        {
            this.id = employeeSalary.id || this.getRandomID();
            this.img = employeeSalary.img || 'assets/images/user/user1.jpg';
            this.name = employeeSalary.name || '';
            this.email = employeeSalary.email || '';
            this.payslip = employeeSalary.payslip || '';
            this.role = employeeSalary.role || '';
            this.empID = employeeSalary.empID || '';
            this.department = employeeSalary.department || '';
            this.salary = employeeSalary.salary || '';
        }
    }
    EmployeeSalary.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return EmployeeSalary;
}());
exports.EmployeeSalary = EmployeeSalary;
//# sourceMappingURL=employee-salary.model.js.map