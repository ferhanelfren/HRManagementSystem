"use strict";
exports.__esModule = true;
exports.TaskRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var task_component_1 = require("./task.component");
var routes = [
    {
        path: "",
        component: task_component_1.TaskComponent
    },
];
var TaskRoutingModule = /** @class */ (function () {
    function TaskRoutingModule() {
    }
    TaskRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TaskRoutingModule);
    return TaskRoutingModule;
}());
exports.TaskRoutingModule = TaskRoutingModule;
//# sourceMappingURL=task-routing.module.js.map