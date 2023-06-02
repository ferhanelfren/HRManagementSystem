"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var clients_model_1 = require("../../clients.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, clientService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.clientService = clientService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.clients.name;
            this.clients = data.clients;
        }
        else {
            this.dialogTitle = 'New Client';
            var blankObject = {};
            this.clients = new clients_model_1.Clients(blankObject);
        }
        this.clientForm = this.createContactForm();
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
            id: [this.clients.id],
            img: [this.clients.img],
            name: [this.clients.name],
            email: [this.clients.email],
            mobile: [this.clients.mobile],
            company_name: [this.clients.company_name],
            currency: [this.clients.currency],
            billing_method: [this.clients.billing_method]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.clientService.addClient(this.clientForm.getRawValue());
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