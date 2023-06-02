"use strict";
exports.__esModule = true;
exports.FormComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var contacts_model_1 = require("../contacts.model");
var common_1 = require("@angular/common");
var FormComponent = /** @class */ (function () {
    function FormComponent(dialogRef, data, contactsService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsService = contactsService;
        this.fb = fb;
        this.isDetails = false;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.isDetails = false;
            this.dialogTitle = data.contacts.name;
            this.contacts = data.contacts;
            this.contactsForm = this.createContactForm();
        }
        else if (this.action === 'details') {
            this.contacts = data.contacts;
            this.isDetails = true;
        }
        else {
            this.isDetails = false;
            this.dialogTitle = 'New Contacts';
            var blankObject = {};
            this.contacts = new contacts_model_1.Contacts(blankObject);
            this.contactsForm = this.createContactForm();
        }
    }
    FormComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    };
    FormComponent.prototype.createContactForm = function () {
        return this.fb.group({
            id: [this.contacts.id],
            img: [this.contacts.img],
            name: [this.contacts.name],
            email: [
                this.contacts.email,
                [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(5)],
            ],
            birthDate: [
                common_1.formatDate(this.contacts.birthDate, 'yyyy-MM-dd', 'en'),
                [forms_1.Validators.required],
            ],
            address: [this.contacts.address],
            mobile: [this.contacts.mobile],
            note: [this.contacts.note]
        });
    };
    FormComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormComponent.prototype.confirmAdd = function () {
        var _a;
        this.contactsService.addContacts((_a = this.contactsForm) === null || _a === void 0 ? void 0 : _a.getRawValue());
    };
    FormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.scss']
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map