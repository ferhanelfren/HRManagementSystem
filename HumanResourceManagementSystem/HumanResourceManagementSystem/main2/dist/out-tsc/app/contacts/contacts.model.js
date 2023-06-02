"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var common_1 = require("@angular/common");
var Contacts = /** @class */ (function () {
    function Contacts(contacts) {
        {
            this.id = contacts.id || this.getRandomID();
            this.img = contacts.img || 'assets/images/user/usrbig1.jpg';
            this.name = contacts.name || '';
            this.email = contacts.email || '';
            this.birthDate = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.address = contacts.address || '';
            this.mobile = contacts.mobile || '';
            this.note = contacts.note || '';
        }
    }
    Contacts.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Contacts;
}());
exports.Contacts = Contacts;
//# sourceMappingURL=contacts.model.js.map