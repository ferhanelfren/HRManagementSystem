"use strict";
exports.__esModule = true;
exports.LeaveBalance = void 0;
var LeaveBalance = /** @class */ (function () {
    function LeaveBalance(leaves) {
        {
            this.id = leaves.id || this.getRandomID();
            this.img = leaves.img || 'assets/images/user/usrbig1.jpg';
            this.name = leaves.name || '';
            this.prev = leaves.prev || '';
            this.current = leaves.current || '';
            this.total = leaves.total || '';
            this.used = leaves.used || '';
            this.accepted = leaves.accepted || '';
            this.rejected = leaves.rejected || '';
            this.expired = leaves.expired || '';
            this.carryOver = leaves.carryOver || '';
        }
    }
    LeaveBalance.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return LeaveBalance;
}());
exports.LeaveBalance = LeaveBalance;
//# sourceMappingURL=leave-balance.model.js.map