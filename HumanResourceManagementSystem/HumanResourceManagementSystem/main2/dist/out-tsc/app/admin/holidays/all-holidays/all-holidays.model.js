"use strict";
exports.__esModule = true;
exports.AllHoliday = void 0;
var common_1 = require("@angular/common");
var AllHoliday = /** @class */ (function () {
    function AllHoliday(holiday) {
        {
            this.id = holiday.id || this.getRandomID();
            this.hName = holiday.hName || '';
            this.shift = holiday.shift || '';
            this.details = holiday.details || '';
            this.date = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.location = holiday.location || '';
        }
    }
    AllHoliday.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return AllHoliday;
}());
exports.AllHoliday = AllHoliday;
//# sourceMappingURL=all-holidays.model.js.map