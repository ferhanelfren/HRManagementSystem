"use strict";
exports.__esModule = true;
exports.LeaveTypes = void 0;
var common_1 = require("@angular/common");
var LeaveTypes = /** @class */ (function () {
    function LeaveTypes(leaves) {
        {
            this.id = leaves.id || this.getRandomID();
            this.img = leaves.img || 'assets/images/user/usrbig1.jpg';
            this.leave_name = leaves.leave_name || '';
            this.type = leaves.type || '';
            this.leave_unit = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.status = leaves.status || '';
            this.note = leaves.note || '';
        }
    }
    LeaveTypes.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return LeaveTypes;
}());
exports.LeaveTypes = LeaveTypes;
//# sourceMappingURL=leave-types.model.js.map