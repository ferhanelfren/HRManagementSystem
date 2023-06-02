"use strict";
exports.__esModule = true;
exports.MyLeavesService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var MyLeavesService = /** @class */ (function (_super) {
    tslib_1.__extends(MyLeavesService, _super);
    function MyLeavesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/empLeaveReq.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(MyLeavesService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    MyLeavesService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    MyLeavesService.prototype.getAllMyLeaves = function () {
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
    MyLeavesService.prototype.addMyLeaves = function (myLeaves) {
        this.dialogData = myLeaves;
        // this.httpClient.post(this.API_URL, myLeaves)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = myLeaves;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    MyLeavesService.prototype.updateMyLeaves = function (myLeaves) {
        this.dialogData = myLeaves;
        // this.httpClient.put(this.API_URL + myLeaves.id, myLeaves)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = myLeaves;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    MyLeavesService.prototype.deleteMyLeaves = function (id) {
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
    MyLeavesService = tslib_1.__decorate([
        core_1.Injectable()
    ], MyLeavesService);
    return MyLeavesService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.MyLeavesService = MyLeavesService;
//# sourceMappingURL=my-leaves.service.js.map