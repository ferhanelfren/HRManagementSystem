"use strict";
exports.__esModule = true;
exports.Attendances = void 0;
var common_1 = require("@angular/common");
var Attendances = /** @class */ (function () {
    function Attendances(attendances) {
        {
            this.id = attendances.id || this.getRandomID();
            this.date = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.check_in = attendances.check_in || '';
            this["break"] = attendances["break"] || '';
            this.check_out = attendances.check_out || '';
            this.hours = attendances.hours || '';
            this.status = attendances.status || '';
            this.details = attendances.details || '';
        }
    }
    Attendances.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Attendances;
}());
exports.Attendances = Attendances;
//# sourceMappingURL=attendance.model.js.map