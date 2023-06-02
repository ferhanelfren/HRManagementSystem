"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var payment_model_1 = require("../../payment.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, paymentService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.paymentService = paymentService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.payment.cName;
            this.payment = data.payment;
        }
        else {
            this.dialogTitle = 'New Payment';
            var blankObject = {};
            this.payment = new payment_model_1.Payment(blankObject);
        }
        this.paymentForm = this.createContactForm();
    }
    FormDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    };
    FormDialogComponent.prototype.createContactForm = function () {
        return this.fb.group({
            id: [this.payment.id],
            cName: [this.payment.cName],
            eName: [this.payment.eName],
            charges: [this.payment.charges],
            date: [this.payment.date],
            tax: [this.payment.tax],
            discount: [this.payment.discount],
            total: [this.payment.total]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.paymentService.addPayment(this.paymentForm.getRawValue());
    };
    FormDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-form-dialog',
            templateUrl: './form-dialog.component.html',
            styleUrls: ['./form-dialog.component.scss']
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], FormDialogComponent);
    return FormDialogComponent;
}());
exports.FormDialogComponent = FormDialogComponent;
//# sourceMappingURL=form-dialog.component.js.map