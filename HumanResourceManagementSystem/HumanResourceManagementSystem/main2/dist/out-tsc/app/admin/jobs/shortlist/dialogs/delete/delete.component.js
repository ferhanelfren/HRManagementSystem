"use strict";
exports.__esModule = true;
exports.DeleteDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef, data, shortlistService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.shortlistService = shortlistService;
    }
    DeleteDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteDialogComponent.prototype.confirmDelete = function () {
        this.shortlistService.deleteShortlist(this.data.id);
    };
    DeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-delete',
            templateUrl: './delete.component.html',
            styleUrls: ['./delete.component.scss']
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());
exports.DeleteDialogComponent = DeleteDialogComponent;
//# sourceMappingURL=delete.component.js.map