"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var employees_model_1 = require("../../employees.model");
var common_1 = require("@angular/common");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, employeesService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.employeesService = employeesService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.employees.name;
            this.employees = data.employees;
        }
        else {
            this.dialogTitle = 'New Employees';
            var blankObject = {};
            this.employees = new employees_model_1.Employees(blankObject);
        }
        this.employeesForm = this.createContactForm();
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
            id: [this.employees.id],
            img: [this.employees.img],
            name: [this.employees.name],
            email: [this.employees.email],
            date: [
                common_1.formatDate(this.employees.date, 'yyyy-MM-dd', 'en'),
                [forms_1.Validators.required],
            ],
            role: [this.employees.role],
            mobile: [this.employees.mobile],
            department: [this.employees.department],
            degree: [this.employees.degree]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.employeesService.addEmployees(this.employeesForm.getRawValue());
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