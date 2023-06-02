"use strict";
exports.__esModule = true;
exports.ResumesService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var ResumesService = /** @class */ (function (_super) {
    tslib_1.__extends(ResumesService, _super);
    function ResumesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/resumes.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(ResumesService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    ResumesService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    ResumesService.prototype.getAllResumess = function () {
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
    ResumesService.prototype.addResumes = function (resumes) {
        this.dialogData = resumes;
        // this.httpClient.post(this.API_URL, resumes)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = resumes;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    ResumesService.prototype.updateResumes = function (resumes) {
        this.dialogData = resumes;
        // this.httpClient.put(this.API_URL + resumes.id, resumes)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = resumes;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    ResumesService.prototype.deleteResumes = function (id) {
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
    ResumesService = tslib_1.__decorate([
        core_1.Injectable()
    ], ResumesService);
    return ResumesService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.ResumesService = ResumesService;
//# sourceMappingURL=resumes.service.js.map