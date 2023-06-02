"use strict";
exports.__esModule = true;
exports.Employees = void 0;
var common_1 = require("@angular/common");
var Employees = /** @class */ (function () {
    function Employees(employees) {
        {
            this.id = employees.id || this.getRandomID();
            this.img = employees.img || 'assets/images/user/user1.jpg';
            this.name = employees.name || '';
            this.email = employees.email || '';
            this.date = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.role = employees.role || '';
            this.mobile = employees.mobile || '';
            this.department = employees.department || '';
            this.degree = employees.degree || '';
        }
    }
    Employees.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Employees;
}());
exports.Employees = Employees;
//# sourceMappingURL=employees.model.js.map