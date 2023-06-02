"use strict";
exports.__esModule = true;
exports.FormComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var FormComponent = /** @class */ (function () {
    function FormComponent(dialogRef, data, attendancesService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.attendancesService = attendancesService;
        this.fb = fb;
        this.isDetails = false;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'details') {
            this.attendances = data.attendances;
            this.isDetails = true;
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
            id: [this.attendances.id],
            date: [
                common_1.formatDate(this.attendances.date, 'yyyy-MM-dd, HH:mm', 'en'),
                [forms_1.Validators.required],
            ],
            check_in: [this.attendances.check_in],
            "break": [this.attendances["break"]],
            check_out: [this.attendances.check_out],
            hours: [this.attendances.hours],
            status: [this.attendances.status],
            details: [this.attendances.details]
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
        this.attendancesService.addAttendances((_a = this.attendancesForm) === null || _a === void 0 ? void 0 : _a.getRawValue());
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