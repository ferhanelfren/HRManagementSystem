"use strict";
exports.__esModule = true;
exports.Leaves = void 0;
var common_1 = require("@angular/common");
var Leaves = /** @class */ (function () {
    function Leaves(leaves) {
        {
            this.id = leaves.id || this.getRandomID();
            this.img = leaves.img || 'assets/images/user/usrbig1.jpg';
            this.name = leaves.name || '';
            this.type = leaves.type || '';
            this.from = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.leaveTo = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.reason = leaves.reason || '';
            this.noOfDays = leaves.noOfDays || '';
            this.status = leaves.status || '';
            this.note = leaves.note || '';
        }
    }
    Leaves.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Leaves;
}());
exports.Leaves = Leaves;
//# sourceMappingURL=leaves.model.js.map