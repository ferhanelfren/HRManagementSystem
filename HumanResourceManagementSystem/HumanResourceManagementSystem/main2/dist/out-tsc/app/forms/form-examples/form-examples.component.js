"use strict";
exports.__esModule = true;
exports.FormExamplesComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormExamplesComponent = /** @class */ (function () {
    function FormExamplesComponent(fb) {
        this.fb = fb;
        this.hide = true;
        this.hide2 = true;
        this.hide3 = true;
        this.initForm();
        this.initSecondForm();
        this.initThirdForm();
    }
    FormExamplesComponent.prototype.initForm = function () {
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
    };
    FormExamplesComponent.prototype.initSecondForm = function () {
        this.secondForm = this.fb.group({
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
    };
    FormExamplesComponent.prototype.initThirdForm = function () {
        this.thirdForm = this.fb.group({
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
    };
    FormExamplesComponent.prototype.onRegister = function () {
        var _a;
        console.log('Form Value', (_a = this.register) === null || _a === void 0 ? void 0 : _a.value);
    };
    FormExamplesComponent.prototype.onsecondFormSubmit = function () {
        var _a;
        console.log('Form Value', (_a = this.secondForm) === null || _a === void 0 ? void 0 : _a.value);
    };
    FormExamplesComponent.prototype.onThirdFormSubmit = function () {
        var _a;
        console.log('Form Value', (_a = this.thirdForm) === null || _a === void 0 ? void 0 : _a.value);
    };
    FormExamplesComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-form-examples',
            templateUrl: './form-examples.component.html',
            styleUrls: ['./form-examples.component.scss']
        })
    ], FormExamplesComponent);
    return FormExamplesComponent;
}());
exports.FormExamplesComponent = FormExamplesComponent;
//# sourceMappingURL=form-examples.component.js.map