"use strict";
exports.__esModule = true;
exports.MyProjectsService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var MyProjectsService = /** @class */ (function (_super) {
    tslib_1.__extends(MyProjectsService, _super);
    function MyProjectsService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/my-projects-client.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(MyProjectsService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    MyProjectsService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    MyProjectsService.prototype.getAllMyProjectss = function () {
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
    MyProjectsService.prototype.addMyProjects = function (myProjects) {
        this.dialogData = myProjects;
        // this.httpClient.post(this.API_URL, myProjects)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = myProjects;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    MyProjectsService.prototype.updateMyProjects = function (myProjects) {
        this.dialogData = myProjects;
        // this.httpClient.put(this.API_URL + myProjects.id, myProjects)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = myProjects;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    MyProjectsService.prototype.deleteMyProjects = function (id) {
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
    MyProjectsService = tslib_1.__decorate([
        core_1.Injectable()
    ], MyProjectsService);
    return MyProjectsService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.MyProjectsService = MyProjectsService;
//# sourceMappingURL=my-projects.service.js.map