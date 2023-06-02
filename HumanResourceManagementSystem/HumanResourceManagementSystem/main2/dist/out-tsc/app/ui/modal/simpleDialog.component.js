"use strict";
exports.__esModule = true;
exports.SimpleDialogComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SimpleDialogComponent = /** @class */ (function () {
    function SimpleDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SimpleDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SimpleDialogComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n    <h1 mat-dialog-title>Hello There</h1>\n    <div mat-dialog-content>\n      <p>This Is a Simple Dialog</p>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"close()\">Close</button>\n    </div>\n  "
        })
    ], SimpleDialogComponent);
    return SimpleDialogComponent;
}());
exports.SimpleDialogComponent = SimpleDialogComponent;
//# sourceMappingURL=simpleDialog.component.js.map