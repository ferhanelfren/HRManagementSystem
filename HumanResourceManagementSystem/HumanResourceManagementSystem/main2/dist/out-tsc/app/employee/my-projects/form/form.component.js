"use strict";
exports.__esModule = true;
exports.FormComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var FormComponent = /** @class */ (function () {
    function FormComponent(dialogRef, data, myProjectsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.myProjectsService = myProjectsService;
        this.isDetails = false;
        // Set the defaults
        this.myProjects = data.myProjects;
        this.isDetails = true;
    }
    FormComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
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