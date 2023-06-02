"use strict";
exports.__esModule = true;
exports.AttendancesService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var AttendancesService = /** @class */ (function (_super) {
    tslib_1.__extends(AttendancesService, _super);
    function AttendancesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/attendance.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(AttendancesService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    AttendancesService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    AttendancesService.prototype.getAllAttendancess = function () {
        var _this = this;
        this.subs.sink = this.httpClient
            .get(this.API_URL)
            .subscribe({
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
    AttendancesService.prototype.addAttendances = function (attendances) {
        this.dialogData = attendances;
        // this.httpClient.post(this.API_URL, attendances)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = attendances;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    AttendancesService.prototype.updateAttendances = function (attendances) {
        this.dialogData = attendances;
        // this.httpClient.put(this.API_URL + attendances.id, attendances)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = attendances;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    AttendancesService.prototype.deleteAttendances = function (id) {
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
    AttendancesService = tslib_1.__decorate([
        core_1.Injectable()
    ], AttendancesService);
    return AttendancesService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.AttendancesService = AttendancesService;
//# sourceMappingURL=attendance.service.js.map