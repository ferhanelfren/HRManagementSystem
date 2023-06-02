"use strict";
exports.__esModule = true;
exports.PaymentService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var PaymentService = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentService, _super);
    function PaymentService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/payment.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(PaymentService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    PaymentService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    PaymentService.prototype.getAllPayments = function () {
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
    PaymentService.prototype.addPayment = function (payment) {
        this.dialogData = payment;
        // this.httpClient.post(this.API_URL, payment)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = payment;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    PaymentService.prototype.updatePayment = function (payment) {
        this.dialogData = payment;
        // this.httpClient.put(this.API_URL + payment.id, payment)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = payment;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    PaymentService.prototype.deletePayment = function (id) {
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
    PaymentService = tslib_1.__decorate([
        core_1.Injectable()
    ], PaymentService);
    return PaymentService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map