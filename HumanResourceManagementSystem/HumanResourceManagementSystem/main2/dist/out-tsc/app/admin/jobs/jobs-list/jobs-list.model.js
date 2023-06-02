"use strict";
exports.__esModule = true;
exports.JobsList = void 0;
var common_1 = require("@angular/common");
var JobsList = /** @class */ (function () {
    function JobsList(jobsList) {
        {
            this.id = jobsList.id || this.getRandomID();
            this.title = jobsList.title || '';
            this.status = jobsList.status || '';
            this.date = common_1.formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.role = jobsList.role || '';
            this.vacancies = jobsList.vacancies || '';
            this.department = jobsList.department || '';
            this.jobType = jobsList.jobType || '';
        }
    }
    JobsList.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return JobsList;
}());
exports.JobsList = JobsList;
//# sourceMappingURL=jobs-list.model.js.map