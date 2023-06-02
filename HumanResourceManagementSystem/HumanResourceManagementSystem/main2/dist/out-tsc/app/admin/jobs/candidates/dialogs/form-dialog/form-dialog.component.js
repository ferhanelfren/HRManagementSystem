"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var candidates_model_1 = require("../../candidates.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, candidatesService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.candidatesService = candidatesService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.mobile,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.candidates.name;
            this.candidates = data.candidates;
        }
        else {
            this.dialogTitle = 'New Candidates';
            var blankObject = {};
            this.candidates = new candidates_model_1.Candidates(blankObject);
        }
        this.candidatesForm = this.createContactForm();
    }
    FormDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('mobile')
                ? 'Not a valid mobile'
                : '';
    };
    FormDialogComponent.prototype.createContactForm = function () {
        return this.fb.group({
            id: [this.candidates.id],
            img: [this.candidates.img],
            name: [this.candidates.name],
            title: [this.candidates.title],
            mobile: [this.candidates.mobile],
            download: [this.candidates.download],
            role: [this.candidates.role],
            email: [this.candidates.email],
            jobType: [this.candidates.jobType]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.candidatesService.addCandidates(this.candidatesForm.getRawValue());
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