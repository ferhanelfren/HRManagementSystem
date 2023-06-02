"use strict";
exports.__esModule = true;
exports.LeadsService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var LeadsService = /** @class */ (function (_super) {
    tslib_1.__extends(LeadsService, _super);
    function LeadsService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/leads.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(LeadsService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    LeadsService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    LeadsService.prototype.getAllLeadss = function () {
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
    LeadsService.prototype.addLeads = function (leads) {
        this.dialogData = leads;
        // this.httpClient.post(this.API_URL, leads)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = leads;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    LeadsService.prototype.updateLeads = function (leads) {
        this.dialogData = leads;
        // this.httpClient.put(this.API_URL + leads.id, leads)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = leads;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    LeadsService.prototype.deleteLeads = function (id) {
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
    LeadsService = tslib_1.__decorate([
        core_1.Injectable()
    ], LeadsService);
    return LeadsService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.LeadsService = LeadsService;
//# sourceMappingURL=leads.service.js.map