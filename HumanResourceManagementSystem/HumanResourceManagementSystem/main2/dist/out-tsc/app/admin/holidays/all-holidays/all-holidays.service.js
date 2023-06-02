"use strict";
exports.__esModule = true;
exports.HolidayService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var HolidayService = /** @class */ (function (_super) {
    tslib_1.__extends(HolidayService, _super);
    function HolidayService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/holidays.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(HolidayService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    HolidayService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    HolidayService.prototype.getAllHolidays = function () {
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
    HolidayService.prototype.addHoliday = function (holiday) {
        this.dialogData = holiday;
        // this.httpClient.post(this.API_URL, holiday)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = holiday;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    HolidayService.prototype.updateHoliday = function (holiday) {
        this.dialogData = holiday;
        // this.httpClient.put(this.API_URL + holiday.id, holiday)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = holiday;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    HolidayService.prototype.deleteHoliday = function (id) {
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
    HolidayService = tslib_1.__decorate([
        core_1.Injectable()
    ], HolidayService);
    return HolidayService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.HolidayService = HolidayService;
//# sourceMappingURL=all-holidays.service.js.map