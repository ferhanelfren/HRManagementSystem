"use strict";
exports.__esModule = true;
exports.JobsRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var candidates_component_1 = require("./candidates/candidates.component");
var jobs_list_component_1 = require("./jobs-list/jobs-list.component");
var resumes_component_1 = require("./resumes/resumes.component");
var shortlist_component_1 = require("./shortlist/shortlist.component");
var routes = [
    {
        path: "jobs-list",
        component: jobs_list_component_1.JobsListComponent
    },
    {
        path: "resumes",
        component: resumes_component_1.ResumesComponent
    },
    {
        path: "candidates",
        component: candidates_component_1.CandidatesComponent
    },
    {
        path: "shortlist",
        component: shortlist_component_1.ShortlistComponent
    },
];
var JobsRoutingModule = /** @class */ (function () {
    function JobsRoutingModule() {
    }
    JobsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], JobsRoutingModule);
    return JobsRoutingModule;
}());
exports.JobsRoutingModule = JobsRoutingModule;
//# sourceMappingURL=jobs-routing.module.js.map