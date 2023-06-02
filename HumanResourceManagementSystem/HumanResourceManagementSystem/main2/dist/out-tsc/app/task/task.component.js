"use strict";
exports.__esModule = true;
exports.TaskComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var forms_1 = require("@angular/forms");
var TaskComponent = /** @class */ (function () {
    function TaskComponent(fb, http) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.mode = new forms_1.UntypedFormControl('side');
        this.showFiller = false;
        this.isNewEvent = false;
        this.tasks = [];
        var blank = {};
        this.taskForm = this.createFormGroup(blank);
        this.fetch(function (data) {
            _this.tasks = data;
        });
    }
    TaskComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/task.json');
        req.onload = function () {
            var data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    };
    TaskComponent.prototype.drop = function (event) {
        drag_drop_1.moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    };
    TaskComponent.prototype.toggle = function (task, nav) {
        nav.close();
        task.done = !task.done;
    };
    TaskComponent.prototype.addNewTask = function (nav) {
        this.resetFormField();
        this.isNewEvent = true;
        this.dialogTitle = 'New Task';
        this.userImg = 'assets/images/user/user1.jpg';
        nav.open();
    };
    TaskComponent.prototype.taskClick = function (task, nav) {
        this.isNewEvent = false;
        this.dialogTitle = 'Edit Task';
        this.userImg = task.img;
        nav.open();
        this.taskForm = this.createFormGroup(task);
    };
    TaskComponent.prototype.closeSlider = function (nav) {
        nav.close();
    };
    TaskComponent.prototype.createFormGroup = function (data) {
        return this.fb.group({
            id: [data ? data.id : this.getRandomID()],
            img: [data ? data.img : 'assets/images/user/user1.jpg'],
            name: [data ? data.name : null],
            title: [data ? data.title : null],
            done: [data ? data.done : null],
            priority: [data ? data.priority : null],
            due_date: [data ? data.due_date : null],
            note: [data ? data.note : null]
        });
    };
    TaskComponent.prototype.saveTask = function () {
        this.tasks.unshift(this.taskForm.value);
        this.resetFormField();
    };
    TaskComponent.prototype.editTask = function () {
        var targetIdx = this.tasks
            .map(function (item) { return item.id; })
            .indexOf(this.taskForm.value.id);
        this.tasks[targetIdx] = this.taskForm.value;
    };
    TaskComponent.prototype.deleteTask = function (nav) {
        var targetIdx = this.tasks
            .map(function (item) { return item.id; })
            .indexOf(this.taskForm.value.id);
        this.tasks.splice(targetIdx, 1);
        nav.close();
    };
    TaskComponent.prototype.resetFormField = function () {
        this.taskForm.controls['name'].reset();
        this.taskForm.controls['title'].reset();
        this.taskForm.controls['done'].reset();
        this.taskForm.controls['priority'].reset();
        this.taskForm.controls['due_date'].reset();
        this.taskForm.controls['note'].reset();
    };
    TaskComponent.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    TaskComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-task',
            templateUrl: './task.component.html',
            styleUrls: ['./task.component.scss']
        })
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map