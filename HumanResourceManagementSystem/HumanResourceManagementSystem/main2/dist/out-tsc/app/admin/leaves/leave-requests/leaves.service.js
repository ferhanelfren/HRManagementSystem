"use strict";
exports.__esModule = true;
exports.LeavesService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var LeavesService = /** @class */ (function (_super) {
    tslib_1.__extends(LeavesService, _super);
    function LeavesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/leaves.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(LeavesService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    LeavesService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    LeavesService.prototype.getAllLeavess = function () {
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
    LeavesService.prototype.addLeaves = function (leaves) {
        this.dialogData = leaves;
        // this.httpClient.post(this.API_URL, leaves)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = leaves;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    LeavesService.prototype.updateLeaves = function (leaves) {
        this.dialogData = leaves;
        // this.httpClient.put(this.API_URL + leaves.id, leaves)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = leaves;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    LeavesService.prototype.deleteLeaves = function (id) {
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
    LeavesService = tslib_1.__decorate([
        core_1.Injectable()
    ], LeavesService);
    return LeavesService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.LeavesService = LeavesService;
//# sourceMappingURL=leaves.service.js.map