"use strict";
exports.__esModule = true;
exports.FormValidationsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormValidationsComponent = /** @class */ (function () {
    function FormValidationsComponent(fb) {
        this.fb = fb;
        this.hide = true;
        this.agree = false;
        this.register = this.fb.group({
            first: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+')]],
            last: [''],
            password: ['', [forms_1.Validators.required]],
            email: [
                '',
                [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(5)],
            ],
            address: [''],
            city: ['', [forms_1.Validators.required]],
            state: ['', [forms_1.Validators.required]],
            country: ['', [forms_1.Validators.required]],
            termcondition: [false, [forms_1.Validators.requiredTrue]]
        });
    }
    FormValidationsComponent.prototype.onRegister = function () {
        console.log('Form Value', this.register.value);
    };
    FormValidationsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-form-validations',
            templateUrl: './form-validations.component.html',
            styleUrls: ['./form-validations.component.scss']
        })
    ], FormValidationsComponent);
    return FormValidationsComponent;
}());
exports.FormValidationsComponent = FormValidationsComponent;
//# sourceMappingURL=form-validations.component.js.map