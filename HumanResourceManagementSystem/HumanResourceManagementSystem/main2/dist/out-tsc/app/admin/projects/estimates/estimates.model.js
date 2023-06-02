"use strict";
exports.__esModule = true;
exports.Estimates = void 0;
var Estimates = /** @class */ (function () {
    function Estimates(estimates) {
        {
            this.id = estimates.id || this.getRandomID();
            this.eNo = estimates.eNo || '';
            this.cName = estimates.cName || '';
            this.estDate = estimates.estDate || '';
            this.country = estimates.country || '';
            this.amount = estimates.amount || '';
            this.expDate = estimates.expDate || '';
            this.status = estimates.status || '';
            this.details = estimates.details || '';
        }
    }
    Estimates.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Estimates;
}());
exports.Estimates = Estimates;
//# sourceMappingURL=estimates.model.js.map