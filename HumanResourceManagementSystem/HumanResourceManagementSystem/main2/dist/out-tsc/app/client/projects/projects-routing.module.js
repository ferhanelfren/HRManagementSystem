"use strict";
exports.__esModule = true;
exports.ProjectsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page404_component_1 = require("src/app/authentication/page404/page404.component");
var my_projects_component_1 = require("./my-projects/my-projects.component");
var project_details_component_1 = require("./project-details/project-details.component");
var routes = [
    {
        path: "myProjects",
        component: my_projects_component_1.MyProjectsComponent
    },
    {
        path: "projectDetails",
        component: project_details_component_1.ProjectDetailsComponent
    },
    { path: "**", component: page404_component_1.Page404Component },
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());
exports.ProjectsRoutingModule = ProjectsRoutingModule;
//# sourceMappingURL=projects-routing.module.js.map