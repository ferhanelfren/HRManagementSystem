"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var jobs_list_model_1 = require("../../jobs-list.model");
var common_1 = require("@angular/common");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, jobsListService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.jobsListService = jobsListService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.status,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.jobsList.title;
            this.jobsList = data.jobsList;
        }
        else {
            this.dialogTitle = 'New JobsList';
            var blankObject = {};
            this.jobsList = new jobs_list_model_1.JobsList(blankObject);
        }
        this.jobsListForm = this.createContactForm();
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
            id: [this.jobsList.id],
            title: [this.jobsList.title],
            status: [this.jobsList.status],
            date: [
                common_1.formatDate(this.jobsList.date, 'yyyy-MM-dd', 'en'),
                [forms_1.Validators.required],
            ],
            role: [this.jobsList.role],
            vacancies: [this.jobsList.vacancies],
            department: [this.jobsList.department],
            jobType: [this.jobsList.jobType]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.jobsListService.addJobsList(this.jobsListForm.getRawValue());
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