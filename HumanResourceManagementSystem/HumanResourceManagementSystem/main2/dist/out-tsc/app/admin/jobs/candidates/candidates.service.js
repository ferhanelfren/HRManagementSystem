"use strict";
exports.__esModule = true;
exports.CandidatesService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var CandidatesService = /** @class */ (function (_super) {
    tslib_1.__extends(CandidatesService, _super);
    function CandidatesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/candidates.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(CandidatesService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    CandidatesService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    CandidatesService.prototype.getAllCandidatess = function () {
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
    CandidatesService.prototype.addCandidates = function (candidates) {
        this.dialogData = candidates;
        // this.httpClient.post(this.API_URL, candidates)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = candidates;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    CandidatesService.prototype.updateCandidates = function (candidates) {
        this.dialogData = candidates;
        // this.httpClient.put(this.API_URL + candidates.id, candidates)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = candidates;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    CandidatesService.prototype.deleteCandidates = function (id) {
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
    CandidatesService = tslib_1.__decorate([
        core_1.Injectable()
    ], CandidatesService);
    return CandidatesService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.CandidatesService = CandidatesService;
//# sourceMappingURL=candidates.service.js.map