"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var calendar_model_1 = require("../../calendar.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, calendarService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.calendarService = calendarService;
        this.fb = fb;
        this.showDeleteBtn = false;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.calendar.title;
            this.calendar = data.calendar;
            this.showDeleteBtn = true;
        }
        else {
            this.dialogTitle = 'New Event';
            var blankObject = {};
            this.calendar = new calendar_model_1.Calendar(blankObject);
            this.showDeleteBtn = false;
        }
        this.calendarForm = this.createContactForm();
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
            id: [this.calendar.id],
            title: [this.calendar.title, [forms_1.Validators.required]],
            category: [this.calendar.category],
            startDate: [this.calendar.startDate, [forms_1.Validators.required]],
            endDate: [this.calendar.endDate, [forms_1.Validators.required]],
            details: [this.calendar.details]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.deleteEvent = function () {
        this.calendarService.deleteCalendar(this.calendarForm.getRawValue());
        this.dialogRef.close('delete');
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.calendarService.addUpdateCalendar(this.calendarForm.getRawValue());
        this.dialogRef.close('submit');
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