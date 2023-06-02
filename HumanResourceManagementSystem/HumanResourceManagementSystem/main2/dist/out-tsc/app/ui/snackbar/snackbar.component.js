"use strict";
exports.__esModule = true;
exports.SnackbarComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarComponent.prototype.showNotification = function (colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    };
    SnackbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.scss']
        })
    ], SnackbarComponent);
    return SnackbarComponent;
}());
exports.SnackbarComponent = SnackbarComponent;
//# sourceMappingURL=snackbar.component.js.map