"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var leads_model_1 = require("../../leads.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, leadsService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.leadsService = leadsService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.leads.name;
            this.leads = data.leads;
        }
        else {
            this.dialogTitle = 'New Leads';
            var blankObject = {};
            this.leads = new leads_model_1.Leads(blankObject);
        }
        this.leadsForm = this.createContactForm();
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
            id: [this.leads.id],
            img: [this.leads.img],
            name: [this.leads.name],
            email: [this.leads.email],
            role: [this.leads.role],
            mobile: [this.leads.mobile],
            department: [this.leads.department],
            project: [this.leads.project]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.leadsService.addLeads(this.leadsForm.getRawValue());
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