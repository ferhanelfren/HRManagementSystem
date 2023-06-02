"use strict";
exports.__esModule = true;
exports.EstimatesService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var EstimatesService = /** @class */ (function (_super) {
    tslib_1.__extends(EstimatesService, _super);
    function EstimatesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/estimates.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(EstimatesService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    EstimatesService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    EstimatesService.prototype.getAllEstimatess = function () {
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
    EstimatesService.prototype.addEstimates = function (estimates) {
        this.dialogData = estimates;
        // this.httpClient.post(this.API_URL, estimates)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = estimates;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    EstimatesService.prototype.updateEstimates = function (estimates) {
        this.dialogData = estimates;
        // this.httpClient.put(this.API_URL + estimates.id, estimates)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = estimates;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    EstimatesService.prototype.deleteEstimates = function (id) {
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
    EstimatesService = tslib_1.__decorate([
        core_1.Injectable()
    ], EstimatesService);
    return EstimatesService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.EstimatesService = EstimatesService;
//# sourceMappingURL=estimates.service.js.map