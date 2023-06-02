"use strict";
exports.__esModule = true;
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(payment) {
        {
            this.id = payment.id || this.getRandomID();
            this.cName = payment.cName || '';
            this.eName = payment.eName || '';
            this.charges = payment.charges || '';
            this.tax = payment.tax || '';
            this.date = payment.date || '';
            this.discount = payment.discount || '';
            this.total = payment.total || '';
        }
    }
    Payment.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Payment;
}());
exports.Payment = Payment;
//# sourceMappingURL=payment.model.js.map