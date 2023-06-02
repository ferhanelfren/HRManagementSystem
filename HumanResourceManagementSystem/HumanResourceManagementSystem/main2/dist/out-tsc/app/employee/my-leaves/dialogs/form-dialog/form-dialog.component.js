"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var my_leaves_model_1 = require("../../my-leaves.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, myLeavesService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.myLeavesService = myLeavesService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Leave Request';
            this.myLeaves = data.myLeaves;
        }
        else {
            this.dialogTitle = 'New Leave Request';
            var blankObject = {};
            this.myLeaves = new my_leaves_model_1.MyLeaves(blankObject);
        }
        this.myLeavesForm = this.createContactForm();
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
            id: [this.myLeaves.id],
            halfDay: [this.myLeaves.halfDay, [forms_1.Validators.required]],
            applyDate: [this.myLeaves.applyDate, [forms_1.Validators.required]],
            fromDate: [this.myLeaves.fromDate, [forms_1.Validators.required]],
            toDate: [this.myLeaves.toDate, [forms_1.Validators.required]],
            type: [this.myLeaves.type, [forms_1.Validators.required]],
            status: [this.myLeaves.status, [forms_1.Validators.required]],
            reason: [this.myLeaves.reason, [forms_1.Validators.required]]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.myLeavesService.addMyLeaves(this.myLeavesForm.getRawValue());
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