"use strict";
exports.__esModule = true;
exports.TodayService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var TodayService = /** @class */ (function (_super) {
    tslib_1.__extends(TodayService, _super);
    function TodayService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/today.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(TodayService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    TodayService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    TodayService.prototype.getAllTodays = function () {
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
    TodayService = tslib_1.__decorate([
        core_1.Injectable()
    ], TodayService);
    return TodayService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.TodayService = TodayService;
//# sourceMappingURL=today.service.js.map