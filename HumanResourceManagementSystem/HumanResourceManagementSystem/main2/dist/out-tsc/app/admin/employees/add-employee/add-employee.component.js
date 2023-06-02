"use strict";
exports.__esModule = true;
exports.AddEmployeeComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(fb) {
        this.fb = fb;
        this.hide3 = true;
        this.agree3 = false;
        this.docForm = this.fb.group({
            first: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+')]],
            last: [''],
            gender: ['', [forms_1.Validators.required]],
            mobile: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required]],
            conformPassword: ['', [forms_1.Validators.required]],
            designation: [''],
            department: [''],
            address: [''],
            email: [
                '',
                [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(5)],
            ],
            dob: ['', [forms_1.Validators.required]],
            education: [''],
            uploadImg: ['']
        });
    }
    AddEmployeeComponent.prototype.onSubmit = function () {
        console.log('Form Value', this.docForm.value);
    };
    AddEmployeeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-add-employee',
            templateUrl: './add-employee.component.html',
            styleUrls: ['./add-employee.component.scss']
        })
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employee.component.js.map