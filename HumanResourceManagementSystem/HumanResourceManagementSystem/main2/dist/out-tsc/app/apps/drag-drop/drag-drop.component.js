"use strict";
exports.__esModule = true;
exports.DragDropComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var DragDropComponent = /** @class */ (function () {
    function DragDropComponent() {
        this.todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
        this.done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
        this.movies = [
            'Episode I - The Phantom Menace',
            'Episode II - Attack of the Clones',
            'Episode III - Revenge of the Sith',
            'Episode IV - A New Hope',
            'Episode V - The Empire Strikes Back',
            'Episode VI - Return of the Jedi',
            'Episode VII - The Force Awakens',
            'Episode VIII - The Last Jedi',
            'Episode IX - The Rise of Skywalker',
        ];
        this.items = [
            { value: 'I can be dragged', disabled: false },
            { value: 'I cannot be dragged', disabled: true },
            { value: 'I can also be dragged', disabled: false },
        ];
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
        this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.even = [10];
    }
    DragDropComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            drag_drop_1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            drag_drop_1.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    DragDropComponent.prototype.droppredicate = function (event) {
        if (event.previousContainer === event.container) {
            drag_drop_1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            drag_drop_1.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    DragDropComponent.prototype.drop2 = function (event) {
        drag_drop_1.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    };
    /** Predicate function that only allows even numbers to be dropped into a list. */
    DragDropComponent.prototype.evenPredicate = function (item) {
        return item.data % 2 === 0;
    };
    /** Predicate function that doesn't allow items to be dropped into a list. */
    DragDropComponent.prototype.noReturnPredicate = function () {
        return false;
    };
    DragDropComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-drag-drop',
            templateUrl: './drag-drop.component.html',
            styleUrls: ['./drag-drop.component.scss']
        })
    ], DragDropComponent);
    return DragDropComponent;
}());
exports.DragDropComponent = DragDropComponent;
//# sourceMappingURL=drag-drop.component.js.map