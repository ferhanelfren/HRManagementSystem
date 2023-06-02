"use strict";
exports.__esModule = true;
exports.AllprojectsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var board_component_1 = require("./board/board.component");
var AllprojectsComponent = /** @class */ (function () {
    function AllprojectsComponent() {
        this.title = 'Oh My Kanban!';
    }
    tslib_1.__decorate([
        core_1.ViewChild(board_component_1.BoardComponent)
    ], AllprojectsComponent.prototype, "boardComponent");
    AllprojectsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-all-projects',
            templateUrl: './all-projects.component.html',
            styleUrls: ['./all-projects.component.scss'],
            providers: []
        })
    ], AllprojectsComponent);
    return AllprojectsComponent;
}());
exports.AllprojectsComponent = AllprojectsComponent;
//# sourceMappingURL=all-projects.component.js.map