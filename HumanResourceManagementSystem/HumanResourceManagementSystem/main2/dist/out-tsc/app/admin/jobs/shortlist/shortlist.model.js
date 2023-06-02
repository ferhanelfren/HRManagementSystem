"use strict";
exports.__esModule = true;
exports.Shortlist = void 0;
var Shortlist = /** @class */ (function () {
    function Shortlist(shortlist) {
        {
            this.id = shortlist.id || this.getRandomID();
            this.img = shortlist.img || 'assets/images/user/user1.jpg';
            this.name = shortlist.name || '';
            this.title = shortlist.title || '';
            this.mobile = shortlist.mobile || '';
            this.download = shortlist.download || '';
            this.role = shortlist.role || '';
            this.email = shortlist.email || '';
            this.jobType = shortlist.jobType || '';
        }
    }
    Shortlist.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Shortlist;
}());
exports.Shortlist = Shortlist;
//# sourceMappingURL=shortlist.model.js.map