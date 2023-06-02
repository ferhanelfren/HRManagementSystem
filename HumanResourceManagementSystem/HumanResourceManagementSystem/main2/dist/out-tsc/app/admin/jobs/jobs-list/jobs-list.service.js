"use strict";
exports.__esModule = true;
exports.JobsListService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var JobsListService = /** @class */ (function (_super) {
    tslib_1.__extends(JobsListService, _super);
    function JobsListService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/jobs-list.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(JobsListService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    JobsListService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    JobsListService.prototype.getAllJobsLists = function () {
        var _this = this;
        this.subs.sink = this.httpClient.get(this.API_URL).subscribe({
            next: function (data) {
                _this.isTblLoading = false;
                _this.dataChange.next(data);
            },
            error: function (error) {
                _this.isTblLoading = false;
                console.log(error.name + ' ' + error.message);
            }
        });
    };
    JobsListService.prototype.addJobsList = function (jobsList) {
        this.dialogData = jobsList;
        // this.httpClient.post(this.API_URL, jobsList)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = jobsList;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    JobsListService.prototype.updateJobsList = function (jobsList) {
        this.dialogData = jobsList;
        // this.httpClient.put(this.API_URL + jobsList.id, jobsList)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = jobsList;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    JobsListService.prototype.deleteJobsList = function (id) {
        console.log(id);
        // this.httpClient.delete(this.API_URL + id)
        //     .subscribe({
        //       next: (data) => {
        //         console.log(id);
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    JobsListService = tslib_1.__decorate([
        core_1.Injectable()
    ], JobsListService);
    return JobsListService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.JobsListService = JobsListService;
//# sourceMappingURL=jobs-list.service.js.map