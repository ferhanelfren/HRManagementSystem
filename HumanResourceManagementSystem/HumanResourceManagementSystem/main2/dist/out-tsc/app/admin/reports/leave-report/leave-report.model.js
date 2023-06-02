"use strict";
exports.__esModule = true;
exports.LeaveReport = void 0;
var LeaveReport = /** @class */ (function () {
    function LeaveReport(leaves) {
        {
            this.id = leaves.id || this.getRandomID();
            this.img = leaves.img || 'assets/images/user/usrbig1.jpg';
            this.name = leaves.name || '';
            this.date = leaves.date || '';
            this.department = leaves.department || '';
            this.type = leaves.type || '';
            this.noOfDays = leaves.noOfDays || '';
            this.remaining = leaves.remaining || '';
            this.total = leaves.total || '';
            this.totalTaken = leaves.totalTaken || '';
            this.carryOver = leaves.carryOver || '';
        }
    }
    LeaveReport.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return LeaveReport;
}());
exports.LeaveReport = LeaveReport;
//# sourceMappingURL=leave-report.model.js.map