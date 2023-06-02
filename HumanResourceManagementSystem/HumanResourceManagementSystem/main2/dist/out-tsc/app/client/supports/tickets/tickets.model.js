"use strict";
exports.__esModule = true;
exports.Tickets = void 0;
var common_1 = require("@angular/common");
var Tickets = /** @class */ (function () {
    function Tickets(ticket) {
        {
            this.id = ticket.id || this.getRandomID();
            this.ticket_id = ticket.ticket_id || '';
            this.createdBy = ticket.createdBy || '';
            this.subject = ticket.subject || '';
            this.status = ticket.status || '';
            this.assignTo = ticket.assignTo || '';
            this.date = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.details = ticket.details || '';
        }
    }
    Tickets.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Tickets;
}());
exports.Tickets = Tickets;
//# sourceMappingURL=tickets.model.js.map