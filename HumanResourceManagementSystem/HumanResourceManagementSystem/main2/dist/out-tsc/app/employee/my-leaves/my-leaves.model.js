"use strict";
exports.__esModule = true;
exports.MyLeaves = void 0;
var MyLeaves = /** @class */ (function () {
    function MyLeaves(myLeaves) {
        {
            this.id = myLeaves.id || this.getRandomID();
            this.halfDay = myLeaves.halfDay || '';
            this.applyDate = myLeaves.applyDate || '';
            this.fromDate = myLeaves.fromDate || '';
            this.toDate = myLeaves.toDate || '';
            this.reason = myLeaves.reason || '';
            this.type = myLeaves.type || '';
            this.status = myLeaves.status || '';
        }
    }
    MyLeaves.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return MyLeaves;
}());
exports.MyLeaves = MyLeaves;
//# sourceMappingURL=my-leaves.model.js.map