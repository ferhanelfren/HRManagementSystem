"use strict";
exports.__esModule = true;
exports.ExpenseReport = void 0;
var ExpenseReport = /** @class */ (function () {
    function ExpenseReport(leaves) {
        {
            this.id = leaves.id || this.getRandomID();
            this.img = leaves.img || 'assets/images/user/usrbig1.jpg';
            this.name = leaves.name || '';
            this.date = leaves.date || '';
            this.expense = leaves.expense || '';
            this.status = leaves.status || '';
            this.amount = leaves.amount || '';
            this.pmode = leaves.pmode || '';
            this.paidTo = leaves.paidTo || '';
            this.invoiceNo = leaves.invoiceNo || '';
        }
    }
    ExpenseReport.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return ExpenseReport;
}());
exports.ExpenseReport = ExpenseReport;
//# sourceMappingURL=expense-report.model.js.map