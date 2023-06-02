"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var shortlist_model_1 = require("../../shortlist.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, shortlistService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.shortlistService = shortlistService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.mobile,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.shortlist.name;
            this.shortlist = data.shortlist;
        }
        else {
            this.dialogTitle = 'New Shortlist';
            var blankObject = {};
            this.shortlist = new shortlist_model_1.Shortlist(blankObject);
        }
        this.shortlistForm = this.createContactForm();
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
            id: [this.shortlist.id],
            img: [this.shortlist.img],
            name: [this.shortlist.name],
            title: [this.shortlist.title],
            mobile: [this.shortlist.mobile],
            download: [this.shortlist.download],
            role: [this.shortlist.role],
            email: [this.shortlist.email],
            jobType: [this.shortlist.jobType]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.shortlistService.addShortlist(this.shortlistForm.getRawValue());
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