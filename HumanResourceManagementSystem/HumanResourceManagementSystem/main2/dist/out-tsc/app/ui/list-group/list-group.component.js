"use strict";
exports.__esModule = true;
exports.ListGroupComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ListGroupComponent = /** @class */ (function () {
    function ListGroupComponent() {
        this.typesOfShoes = [
            'Boots',
            'Clogs',
            'Loafers',
            'Moccasins',
            'Sneakers',
        ];
        // constructor
    }
    ListGroupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-list-group',
            templateUrl: './list-group.component.html',
            styleUrls: ['./list-group.component.scss']
        })
    ], ListGroupComponent);
    return ListGroupComponent;
}());
exports.ListGroupComponent = ListGroupComponent;
//# sourceMappingURL=list-group.component.js.map