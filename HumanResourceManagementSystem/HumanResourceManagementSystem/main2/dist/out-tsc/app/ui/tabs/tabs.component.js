"use strict";
exports.__esModule = true;
exports.TabsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = ["First", "Second", "Third"];
        this.selected = new forms_1.UntypedFormControl(0);
    }
    TabsComponent.prototype.addTab = function (selectAfterAdding) {
        this.tabs.push("New");
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    };
    TabsComponent.prototype.removeTab = function (index) {
        this.tabs.splice(index, 1);
    };
    TabsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-tabs",
            templateUrl: "./tabs.component.html",
            styleUrls: ["./tabs.component.scss"]
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map