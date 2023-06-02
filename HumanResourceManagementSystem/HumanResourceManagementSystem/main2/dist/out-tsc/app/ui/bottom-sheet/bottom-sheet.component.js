"use strict";
exports.__esModule = true;
exports.BottomSheetOverviewExampleSheetComponent = exports.BottomSheetComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var BottomSheetComponent = /** @class */ (function () {
    function BottomSheetComponent(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
        this.breadscrums = [
            {
                title: 'Bottom Sheet',
                items: ['UI'],
                active: 'Bottom Sheet'
            },
        ];
    }
    BottomSheetComponent.prototype.openBottomSheet = function () {
        this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
    };
    BottomSheetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-bottom-sheet',
            templateUrl: './bottom-sheet.component.html',
            styleUrls: ['./bottom-sheet.component.scss']
        })
    ], BottomSheetComponent);
    return BottomSheetComponent;
}());
exports.BottomSheetComponent = BottomSheetComponent;
var BottomSheetOverviewExampleSheetComponent = /** @class */ (function () {
    function BottomSheetOverviewExampleSheetComponent(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    BottomSheetOverviewExampleSheetComponent.prototype.openLink = function (event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-bottom-sheet-overview-example-sheet',
            templateUrl: 'bottom-sheet-overview-example-sheet.html'
        })
    ], BottomSheetOverviewExampleSheetComponent);
    return BottomSheetOverviewExampleSheetComponent;
}());
exports.BottomSheetOverviewExampleSheetComponent = BottomSheetOverviewExampleSheetComponent;
//# sourceMappingURL=bottom-sheet.component.js.map