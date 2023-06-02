"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var my_tasks_model_1 = require("../../my-tasks.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, myTasksService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.myTasksService = myTasksService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.myTasks.taskNo;
            this.myTasks = data.myTasks;
        }
        else {
            this.dialogTitle = 'New MyTasks';
            var blankObject = {};
            this.myTasks = new my_tasks_model_1.MyTasks(blankObject);
        }
        this.myTasksForm = this.createContactForm();
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
            id: [this.myTasks.id],
            taskNo: [this.myTasks.taskNo],
            project: [this.myTasks.project],
            client: [this.myTasks.client],
            status: [this.myTasks.status],
            priority: [this.myTasks.priority],
            type: [this.myTasks.type],
            executor: [this.myTasks.executor],
            date: [
                common_1.formatDate(this.myTasks.date, 'yyyy-MM-dd', 'en'),
                [forms_1.Validators.required],
            ],
            details: [this.myTasks.details]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.myTasksService.addMyTasks(this.myTasksForm.getRawValue());
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