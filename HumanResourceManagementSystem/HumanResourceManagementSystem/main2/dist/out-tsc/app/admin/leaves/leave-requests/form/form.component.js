"use strict";
exports.__esModule = true;
exports.FormComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var leaves_model_1 = require("../leaves.model");
var common_1 = require("@angular/common");
var FormComponent = /** @class */ (function () {
    function FormComponent(dialogRef, data, leavesService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.leavesService = leavesService;
        this.fb = fb;
        this.isDetails = false;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.type,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.isDetails = false;
            this.dialogTitle = data.leaves.name;
            this.leaves = data.leaves;
            this.leavesForm = this.createContactForm();
        }
        else if (this.action === 'details') {
            this.leaves = data.leaves;
            this.isDetails = true;
        }
        else {
            this.isDetails = false;
            this.dialogTitle = 'New Leaves';
            var blankObject = {};
            this.leaves = new leaves_model_1.Leaves(blankObject);
            this.leavesForm = this.createContactForm();
        }
    }
    FormComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('type')
                ? 'Not a valid type'
                : '';
    };
    FormComponent.prototype.createContactForm = function () {
        return this.fb.group({
            id: [this.leaves.id],
            img: [this.leaves.img],
            name: [this.leaves.name],
            type: [this.leaves.type, [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            from: [
                common_1.formatDate(this.leaves.from, 'yyyy-MM-dd', 'en'),
                [forms_1.Validators.required],
            ],
            leaveTo: [
                common_1.formatDate(this.leaves.leaveTo, 'yyyy-MM-dd', 'en'),
                [forms_1.Validators.required],
            ],
            reason: [this.leaves.reason],
            noOfDays: [this.leaves.noOfDays],
            status: [this.leaves.status],
            note: [this.leaves.note]
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
        this.leavesService.addLeaves((_a = this.leavesForm) === null || _a === void 0 ? void 0 : _a.getRawValue());
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