"use strict";
exports.__esModule = true;
exports.EmployeeRoutingModule = void 0;
var tslib_1 = require("tslib");
var page404_component_1 = require("../authentication/page404/page404.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var attendance_component_1 = require("./attendance/attendance.component");
var myteam_component_1 = require("./myteam/myteam.component");
var settings_component_1 = require("./settings/settings.component");
var my_leaves_component_1 = require("./my-leaves/my-leaves.component");
var my_projects_component_1 = require("./my-projects/my-projects.component");
var my_tasks_component_1 = require("./my-tasks/my-tasks.component");
var chat_component_1 = require("./chat/chat.component");
var routes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'attendance',
        component: attendance_component_1.AttendancesComponent
    },
    {
        path: 'myteam',
        component: myteam_component_1.MyTeamsComponent
    },
    {
        path: 'myprojects',
        component: my_projects_component_1.MyProjectsComponent
    },
    {
        path: 'mytasks',
        component: my_tasks_component_1.MyTasksComponent
    },
    {
        path: 'myleaves',
        component: my_leaves_component_1.MyLeavesComponent
    },
    {
        path: 'chat',
        component: chat_component_1.ChatComponent
    },
    {
        path: 'settings',
        component: settings_component_1.SettingsComponent
    },
    { path: '**', component: page404_component_1.Page404Component },
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());
exports.EmployeeRoutingModule = EmployeeRoutingModule;
//# sourceMappingURL=employee-routing.module.js.map