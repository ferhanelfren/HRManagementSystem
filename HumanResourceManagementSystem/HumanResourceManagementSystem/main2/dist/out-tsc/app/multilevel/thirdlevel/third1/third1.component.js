"use strict";
exports.__esModule = true;
exports.Third1Component = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Third1Component = /** @class */ (function () {
    function Third1Component() {
        this.breadscrums = [
            {
                title: 'Third 1',
                items: ['Multilevel', 'Third level'],
                active: 'Third 1'
            },
        ];
        // constructor
    }
    Third1Component = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-third1',
            templateUrl: './third1.component.html',
            styleUrls: ['./third1.component.scss']
        })
    ], Third1Component);
    return Third1Component;
}());
exports.Third1Component = Third1Component;
//# sourceMappingURL=third1.component.js.map