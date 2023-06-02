"use strict";
exports.__esModule = true;
exports.ShortlistService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var ShortlistService = /** @class */ (function (_super) {
    tslib_1.__extends(ShortlistService, _super);
    function ShortlistService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/shortlist.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(ShortlistService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    ShortlistService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    ShortlistService.prototype.getAllShortlists = function () {
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
    ShortlistService.prototype.addShortlist = function (shortlist) {
        this.dialogData = shortlist;
        // this.httpClient.post(this.API_URL, shortlist)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = shortlist;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    ShortlistService.prototype.updateShortlist = function (shortlist) {
        this.dialogData = shortlist;
        // this.httpClient.put(this.API_URL + shortlist.id, shortlist)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = shortlist;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    ShortlistService.prototype.deleteShortlist = function (id) {
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
    ShortlistService = tslib_1.__decorate([
        core_1.Injectable()
    ], ShortlistService);
    return ShortlistService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.ShortlistService = ShortlistService;
//# sourceMappingURL=shortlist.service.js.map