"use strict";
exports.__esModule = true;
exports.Task = void 0;
var common_1 = require("@angular/common");
var Task = /** @class */ (function () {
    function Task(appointment) {
        {
            this.id = appointment.id || this.getRandomID();
            this.img = appointment.img || 'assets/images/user/user1.jpg';
            this.name = appointment.name || '';
            this.title = appointment.title || '';
            this.done = appointment.done || true;
            this.due_date = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.note = appointment.note || '';
            this.priority = appointment.priority || '';
        }
    }
    Task.prototype.getRandomID = function () {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.model.js.map