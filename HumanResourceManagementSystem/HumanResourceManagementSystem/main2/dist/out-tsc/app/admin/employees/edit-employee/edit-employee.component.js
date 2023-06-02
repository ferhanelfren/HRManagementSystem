"use strict";
exports.__esModule = true;
exports.EditEmployeeComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditEmployeeComponent = /** @class */ (function () {
    function EditEmployeeComponent(fb) {
        this.fb = fb;
        this.formdata = {
            first: 'Pooja',
            last: 'Sarma',
            gender: 'Female',
            mobile: '123456789',
            password: '123',
            conformPassword: '123',
            email: 'test@example.com',
            designation: 'Sr. Employee',
            department: '2',
            address: '101, Elanxa, New Yourk',
            dob: '1987-02-17T14:22:18Z',
            education: 'M.C.A.',
            uploadImg: ''
        };
        this.docForm = this.createContactForm();
    }
    EditEmployeeComponent.prototype.onSubmit = function () {
        console.log('Form Value', this.docForm.value);
    };
    EditEmployeeComponent.prototype.createContactForm = function () {
        return this.fb.group({
            first: [
                this.formdata.first,
                [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+')],
            ],
            last: [this.formdata.last],
            gender: [this.formdata.gender, [forms_1.Validators.required]],
            mobile: [this.formdata.mobile, [forms_1.Validators.required]],
            password: [this.formdata.password],
            conformPassword: [this.formdata.conformPassword],
            email: [
                this.formdata.email,
                [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(5)],
            ],
            designation: [this.formdata.designation],
            department: [this.formdata.department],
            address: [this.formdata.address],
            dob: [this.formdata.dob, [forms_1.Validators.required]],
            education: [this.formdata.education],
            uploadImg: [this.formdata.uploadImg]
        });
    };
    EditEmployeeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-edit-employee',
            templateUrl: './edit-employee.component.html',
            styleUrls: ['./edit-employee.component.scss']
        })
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());
exports.EditEmployeeComponent = EditEmployeeComponent;
//# sourceMappingURL=edit-employee.component.js.map