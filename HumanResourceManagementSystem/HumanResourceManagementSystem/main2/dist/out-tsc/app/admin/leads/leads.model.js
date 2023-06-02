"use strict";
exports.__esModule = true;
exports.Leads = void 0;
var Leads = /** @class */ (function () {
    function Leads(leads) {
        {
            this.id = leads.id || this.getRandomID();
            this.img = leads.img || 'assets/images/user/user1.jpg';
            this.name = leads.name || '';
            this.email = leads.email || '';
            this.role = leads.role || '';
            this.mobile = leads.mobile || '';
            this.department = leads.department || '';
            this.project = leads.project || '';
        }
    }
    Leads.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Leads;
}());
exports.Leads = Leads;
//# sourceMappingURL=leads.model.js.map