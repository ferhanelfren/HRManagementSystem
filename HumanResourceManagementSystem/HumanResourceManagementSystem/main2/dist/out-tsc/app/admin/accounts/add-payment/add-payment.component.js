"use strict";
exports.__esModule = true;
exports.AddPaymentComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddPaymentComponent = /** @class */ (function () {
    function AddPaymentComponent(fb) {
        this.fb = fb;
        this.paymentForm = this.fb.group({
            bNo: ['', [forms_1.Validators.required]],
            cName: ['', [forms_1.Validators.required]],
            eName: ['', [forms_1.Validators.required]],
            pDate: ['', [forms_1.Validators.required]],
            dDate: ['', [forms_1.Validators.required]],
            discount: [''],
            total: [''],
            pMethod: ['', [forms_1.Validators.required]],
            pStatus: ['', [forms_1.Validators.required]]
        });
    }
    AddPaymentComponent.prototype.onSubmit = function () {
        console.log('Form Value', this.paymentForm.value);
    };
    AddPaymentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-add-payment',
            templateUrl: './add-payment.component.html',
            styleUrls: ['./add-payment.component.scss']
        })
    ], AddPaymentComponent);
    return AddPaymentComponent;
}());
exports.AddPaymentComponent = AddPaymentComponent;
//# sourceMappingURL=add-payment.component.js.map