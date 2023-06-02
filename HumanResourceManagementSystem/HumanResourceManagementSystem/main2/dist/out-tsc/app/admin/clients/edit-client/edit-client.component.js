"use strict";
exports.__esModule = true;
exports.EditClientComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(fb) {
        this.fb = fb;
        this.formdata = {
            name: 'Pooja Sarma',
            mobile: '123456789',
            email: 'test@example.com',
            date: '1987-02-17T14:22:18Z',
            company_name: 'ABC Infotech',
            currency: 'rupee',
            billing_method: 'Fixed Price',
            uploadImg: ''
        };
        this.clientForm = this.createContactForm();
    }
    EditClientComponent.prototype.onSubmit = function () {
        console.log('Form Value', this.clientForm.value);
    };
    EditClientComponent.prototype.createContactForm = function () {
        return this.fb.group({
            name: [this.formdata.name, [forms_1.Validators.required]],
            mobile: [this.formdata.mobile, [forms_1.Validators.required]],
            email: [
                this.formdata.email,
                [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(5)],
            ],
            date: [this.formdata.date, [forms_1.Validators.required]],
            company_name: [this.formdata.company_name],
            currency: [this.formdata.currency],
            billing_method: [this.formdata.billing_method],
            uploadImg: [this.formdata.uploadImg]
        });
    };
    EditClientComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-edit-client',
            templateUrl: './edit-client.component.html',
            styleUrls: ['./edit-client.component.scss']
        })
    ], EditClientComponent);
    return EditClientComponent;
}());
exports.EditClientComponent = EditClientComponent;
//# sourceMappingURL=edit-client.component.js.map