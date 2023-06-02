"use strict";
exports.__esModule = true;
exports.MyProjects = void 0;
var common_1 = require("@angular/common");
var MyProjects = /** @class */ (function () {
    function MyProjects(myProjects) {
        {
            this.id = myProjects.id || this.getRandomID();
            this.pName = myProjects.pName || '';
            this.type = myProjects.type || '';
            this.open_task = myProjects.open_task || '';
            this.last_modify = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.create_date = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.status = myProjects.status || '';
            this.lead_name = myProjects.lead_name || '';
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