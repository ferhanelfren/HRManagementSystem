"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var common_1 = require("@angular/common");
var Calendar = /** @class */ (function () {
    function Calendar(calendar) {
        {
            this.id = calendar.id || '';
            this.title = calendar.title || '';
            this.category = calendar.category || '';
            this.startDate = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.endDate = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.details = calendar.details || '';
        }
    }
    Calendar.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Calendar;
}());
exports.Calendar = Calendar;
//# sourceMappingURL=calendar.model.js.map