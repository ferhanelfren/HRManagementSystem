"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var estimates_model_1 = require("../../estimates.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, estimatesService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.estimatesService = estimatesService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.estimates.cName;
            this.estimates = data.estimates;
        }
        else {
            this.dialogTitle = 'New Estimates';
            var blankObject = {};
            this.estimates = new estimates_model_1.Estimates(blankObject);
        }
        this.estimatesForm = this.createContactForm();
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
            id: [this.estimates.id],
            eNo: [this.estimates.eNo],
            cName: [this.estimates.cName],
            estDate: [this.estimates.estDate],
            expDate: [this.estimates.expDate],
            country: [this.estimates.country],
            amount: [this.estimates.amount],
            status: [this.estimates.status],
            details: [this.estimates.details]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.estimatesService.addEstimates(this.estimatesForm.getRawValue());
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