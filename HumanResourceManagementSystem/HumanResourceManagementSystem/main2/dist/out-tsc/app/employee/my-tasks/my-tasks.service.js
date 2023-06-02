"use strict";
exports.__esModule = true;
exports.MyTasksService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var MyTasksService = /** @class */ (function (_super) {
    tslib_1.__extends(MyTasksService, _super);
    function MyTasksService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/my-tasks.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(MyTasksService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    MyTasksService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    MyTasksService.prototype.getAllMyTaskss = function () {
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
    MyTasksService.prototype.addMyTasks = function (myTasks) {
        this.dialogData = myTasks;
        // this.httpClient.post(this.API_URL, myTasks)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = myTasks;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    MyTasksService.prototype.updateMyTasks = function (myTasks) {
        this.dialogData = myTasks;
        // this.httpClient.put(this.API_URL + myTasks.id, myTasks)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = myTasks;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    MyTasksService.prototype.deleteMyTasks = function (id) {
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
    MyTasksService = tslib_1.__decorate([
        core_1.Injectable()
    ], MyTasksService);
    return MyTasksService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.MyTasksService = MyTasksService;
//# sourceMappingURL=my-tasks.service.js.map