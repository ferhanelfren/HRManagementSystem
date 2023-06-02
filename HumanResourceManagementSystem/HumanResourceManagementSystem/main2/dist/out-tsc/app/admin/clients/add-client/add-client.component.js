"use strict";
exports.__esModule = true;
exports.AddClientComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(fb) {
        this.fb = fb;
        this.hide3 = true;
        this.agree3 = false;
        this.clientForm = this.fb.group({
            name: ['', [forms_1.Validators.required]],
            mobile: ['', [forms_1.Validators.required]],
            email: [
                '',
                [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(5)],
            ],
            date: ['', [forms_1.Validators.required]],
            company_name: ['', [forms_1.Validators.required]],
            currency: ['', [forms_1.Validators.required]],
            billing_method: ['', [forms_1.Validators.required]],
            uploadImg: ['']
        });
    }
    AddClientComponent.prototype.onSubmit = function () {
        console.log('Form Value', this.clientForm.value);
    };
    AddClientComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-add-client',
            templateUrl: './add-client.component.html',
            styleUrls: ['./add-client.component.scss']
        })
    ], AddClientComponent);
    return AddClientComponent;
}());
exports.AddClientComponent = AddClientComponent;
//# sourceMappingURL=add-client.component.js.map