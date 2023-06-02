"use strict";
exports.__esModule = true;
exports.Clients = void 0;
var Clients = /** @class */ (function () {
    function Clients(client) {
        {
            this.id = client.id || this.getRandomID();
            this.img = client.img || 'assets/images/user/user1.jpg';
            this.name = client.name || '';
            this.mobile = client.mobile || '';
            this.email = client.email || '';
            this.company_name = client.company_name || '';
            this.currency = client.currency || '';
            this.billing_method = client.billing_method || '';
        }
    }
    Clients.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Clients;
}());
exports.Clients = Clients;
//# sourceMappingURL=clients.model.js.map