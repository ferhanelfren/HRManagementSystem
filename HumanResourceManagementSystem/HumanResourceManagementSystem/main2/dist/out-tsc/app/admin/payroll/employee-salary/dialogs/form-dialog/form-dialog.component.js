"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var employee_salary_model_1 = require("../../employee-salary.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, employeeSalaryService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.employeeSalaryService = employeeSalaryService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.employeeSalary.name;
            this.employeeSalary = data.employeeSalary;
        }
        else {
            this.dialogTitle = 'New EmployeeSalary';
            var blankObject = {};
            this.employeeSalary = new employee_salary_model_1.EmployeeSalary(blankObject);
        }
        this.employeeSalaryForm = this.createContactForm();
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
            id: [this.employeeSalary.id],
            img: [this.employeeSalary.img],
            name: [this.employeeSalary.name],
            email: [this.employeeSalary.email],
            payslip: [this.employeeSalary.payslip],
            role: [this.employeeSalary.role],
            empID: [this.employeeSalary.empID],
            department: [this.employeeSalary.department],
            salary: [this.employeeSalary.salary]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.employeeSalaryService.addEmployeeSalary(this.employeeSalaryForm.getRawValue());
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