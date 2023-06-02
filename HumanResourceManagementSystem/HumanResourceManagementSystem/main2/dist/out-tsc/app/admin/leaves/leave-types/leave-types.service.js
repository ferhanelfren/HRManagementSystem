"use strict";
exports.__esModule = true;
exports.LeaveTypesService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var LeaveTypesService = /** @class */ (function (_super) {
    tslib_1.__extends(LeaveTypesService, _super);
    function LeaveTypesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/leave-types.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(LeaveTypesService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    LeaveTypesService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    LeaveTypesService.prototype.getAllLeavess = function () {
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
    LeaveTypesService = tslib_1.__decorate([
        core_1.Injectable()
    ], LeaveTypesService);
    return LeaveTypesService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.LeaveTypesService = LeaveTypesService;
//# sourceMappingURL=leave-types.service.js.map