"use strict";
exports.__esModule = true;
exports.Candidates = void 0;
var Candidates = /** @class */ (function () {
    function Candidates(candidates) {
        {
            this.id = candidates.id || this.getRandomID();
            this.img = candidates.img || 'assets/images/user/user1.jpg';
            this.name = candidates.name || '';
            this.title = candidates.title || '';
            this.mobile = candidates.mobile || '';
            this.download = candidates.download || '';
            this.role = candidates.role || '';
            this.email = candidates.email || '';
            this.jobType = candidates.jobType || '';
        }
    }
    Candidates.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Candidates;
}());
exports.Candidates = Candidates;
//# sourceMappingURL=candidates.model.js.map