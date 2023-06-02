"use strict";
exports.__esModule = true;
exports.MyProjects = void 0;
var common_1 = require("@angular/common");
var MyProjects = /** @class */ (function () {
    function MyProjects(myProjects) {
        {
            this.id = myProjects.id || this.getRandomID();
            this.title = myProjects.title;
            this.clientName = myProjects.clientName || '';
            this.startDate = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.endDate = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.deadLine = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.noOfMembers = myProjects.noOfMembers || '';
            this.priority = myProjects.priority || '';
            this.progress = myProjects.progress || '';
            this.status = myProjects.status || '';
            this.details = myProjects.details || '';
        }
    }
    MyProjects.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return MyProjects;
}());
exports.MyProjects = MyProjects;
//# sourceMappingURL=my-projects.model.js.map