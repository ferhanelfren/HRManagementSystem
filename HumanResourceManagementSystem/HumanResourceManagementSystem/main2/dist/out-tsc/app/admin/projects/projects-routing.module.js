"use strict";
exports.__esModule = true;
exports.ProjectsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var estimates_component_1 = require("./estimates/estimates.component");
var project_details_component_1 = require("./project-details/project-details.component");
var router_1 = require("@angular/router");
var page404_component_1 = require("../../authentication/page404/page404.component");
var add_project_component_1 = require("./add-project/add-project.component");
var all_projects_component_1 = require("./all-projects/all-projects.component");
var routes = [
    {
        path: "addProject",
        component: add_project_component_1.AddprojectsComponent
    },
    {
        path: "allProjects",
        component: all_projects_component_1.AllprojectsComponent
    },
    {
        path: "estimates",
        component: estimates_component_1.EstimatesComponent
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