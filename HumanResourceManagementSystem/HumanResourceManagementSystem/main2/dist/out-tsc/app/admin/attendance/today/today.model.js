"use strict";
exports.__esModule = true;
exports.Today = void 0;
var Today = /** @class */ (function () {
    function Today(today) {
        {
            this.id = today.id || this.getRandomID();
            this.img = today.img || 'assets/images/user/usrbig1.jpg';
            this.name = today.name || '';
            this.first_in = today.first_in || '';
            this["break"] = today["break"] || '';
            this.last_out = today.last_out || '';
            this.total = today.total || '';
            this.status = today.status || '';
            this.shift = today.shift || '';
        }
    }
    Today.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Today;
}());
exports.Today = Today;
//# sourceMappingURL=today.model.js.map