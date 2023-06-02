"use strict";
exports.__esModule = true;
exports.MyTasks = void 0;
var common_1 = require("@angular/common");
var MyTasks = /** @class */ (function () {
    function MyTasks(myTasks) {
        {
            this.id = myTasks.id || this.getRandomID();
            this.taskNo = myTasks.taskNo || '';
            this.project = myTasks.project || '';
            this.client = myTasks.client || '';
            this.status = myTasks.status || '';
            this.priority = myTasks.priority || '';
            this.type = myTasks.type || '';
            this.executor = myTasks.executor || '';
            this.date = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.details = myTasks.details || '';
        }
    }
    MyTasks.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return MyTasks;
}());
exports.MyTasks = MyTasks;
//# sourceMappingURL=my-tasks.model.js.map