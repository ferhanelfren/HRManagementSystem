"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var resumes_model_1 = require("../../resumes.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, resumesService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.resumesService = resumesService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.status,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.resumes.name;
            this.resumes = data.resumes;
        }
        else {
            this.dialogTitle = 'New Resumes';
            var blankObject = {};
            this.resumes = new resumes_model_1.Resumes(blankObject);
        }
        this.resumesForm = this.createContactForm();
    }
    FormDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('status')
                ? 'Not a valid status'
                : '';
    };
    FormDialogComponent.prototype.createContactForm = function () {
        return this.fb.group({
            id: [this.resumes.id],
            img: [this.resumes.img],
            name: [this.resumes.name],
            title: [this.resumes.title],
            status: [this.resumes.status],
            download: [this.resumes.download],
            role: [this.resumes.role],
            department: [this.resumes.department],
            jobType: [this.resumes.jobType]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.resumesService.addResumes(this.resumesForm.getRawValue());
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