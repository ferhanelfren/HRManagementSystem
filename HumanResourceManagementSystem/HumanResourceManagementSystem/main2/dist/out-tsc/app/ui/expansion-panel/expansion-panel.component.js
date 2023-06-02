"use strict";
exports.__esModule = true;
exports.ExpansionPanelComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ExpansionPanelComponent = /** @class */ (function () {
    function ExpansionPanelComponent() {
        this.panelOpenState = false;
        this.step = 0;
        // constructor
    }
    ExpansionPanelComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionPanelComponent.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionPanelComponent.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionPanelComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-expansion-panel',
            templateUrl: './expansion-panel.component.html',
            styleUrls: ['./expansion-panel.component.scss']
        })
    ], ExpansionPanelComponent);
    return ExpansionPanelComponent;
}());
exports.ExpansionPanelComponent = ExpansionPanelComponent;
//# sourceMappingURL=expansion-panel.component.js.map