"use strict";
exports.__esModule = true;
exports.DataWidgetComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var DataWidgetComponent = /** @class */ (function () {
    function DataWidgetComponent() {
        // TODO start
        this.tasks = [
            {
                id: '1',
                title: 'Submit Science Homework',
                done: true,
                priority: 'High'
            },
            {
                id: '2',
                title: 'Request for festivle holiday',
                done: false,
                priority: 'High'
            },
            {
                id: '3',
                title: 'Order new java book',
                done: false,
                priority: 'Low'
            },
            {
                id: '4',
                title: 'Remind for lunch in hotel',
                done: true,
                priority: 'Normal'
            },
            {
                id: '5',
                title: 'Pay Hostel Fees',
                done: false,
                priority: 'High'
            },
            {
                id: '6',
                title: 'Attend Seminar On Sunday',
                done: false,
                priority: 'Normal'
            },
            {
                id: '7',
                title: 'Renew bus pass',
                done: true,
                priority: 'High'
            },
            {
                id: '8',
                title: 'Issue book in library',
                done: false,
                priority: 'High'
            },
            {
                id: '9',
                title: 'Project report submit',
                done: false,
                priority: 'Low'
            },
        ];
        // /constructor
    }
    DataWidgetComponent.prototype.drop = function (event) {
        drag_drop_1.moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    };
    DataWidgetComponent.prototype.toggle = function (task) {
        task.done = !task.done;
    };
    DataWidgetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-data-widget',
            templateUrl: './data-widget.component.html',
            styleUrls: ['./data-widget.component.scss']
        })
    ], DataWidgetComponent);
    return DataWidgetComponent;
}());
exports.DataWidgetComponent = DataWidgetComponent;
//# sourceMappingURL=data-widget.component.js.map