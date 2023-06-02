"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var my_projects_model_1 = require("../../my-projects.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, myProjectsService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.myProjectsService = myProjectsService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.myProjects.pName;
            this.myProjects = data.myProjects;
        }
        else {
            this.dialogTitle = 'New Project';
            var blankObject = {};
            this.myProjects = new my_projects_model_1.MyProjects(blankObject);
        }
        this.myProjectsForm = this.createContactForm();
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
            id: [this.myProjects.id],
            pName: [this.myProjects.pName],
            type: [this.myProjects.type],
            open_task: [this.myProjects.open_task],
            last_modify: [
                common_1.formatDate(this.myProjects.last_modify, 'yyyy-MM-dd', 'en'),
                [forms_1.Validators.required],
            ],
            create_date: [
                common_1.formatDate(this.myProjects.create_date, 'yyyy-MM-dd', 'en'),
                [forms_1.Validators.required],
            ],
            status: [this.myProjects.status],
            lead_name: [this.myProjects.lead_name]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.myProjectsService.addMyProjects(this.myProjectsForm.getRawValue());
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