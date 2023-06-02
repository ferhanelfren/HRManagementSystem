"use strict";
exports.__esModule = true;
exports.DeleteComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(dialogRef, data, contactsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsService = contactsService;
    }
    DeleteComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteComponent.prototype.confirmDelete = function () {
        this.contactsService.deleteContacts(this.data.id);
    };
    DeleteComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-delete',
            templateUrl: './delete.component.html',
            styleUrls: ['./delete.component.scss']
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], DeleteComponent);
    return DeleteComponent;
}());
exports.DeleteComponent = DeleteComponent;
//# sourceMappingURL=delete.component.js.map