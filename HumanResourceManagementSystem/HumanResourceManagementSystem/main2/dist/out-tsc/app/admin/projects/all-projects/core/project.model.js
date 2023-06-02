"use strict";
exports.__esModule = true;
exports.ProjectAdapter = exports.Project = exports.ProjectType = exports.ProjectPriority = exports.ProjectStatus = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["NEWPROJECTS"] = 0] = "NEWPROJECTS";
    ProjectStatus[ProjectStatus["RUNNING"] = 1] = "RUNNING";
    ProjectStatus[ProjectStatus["ONHOLD"] = 2] = "ONHOLD";
    ProjectStatus[ProjectStatus["FINISHED"] = 3] = "FINISHED";
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
var ProjectPriority;
(function (ProjectPriority) {
    ProjectPriority[ProjectPriority["LOW"] = -1] = "LOW";
    ProjectPriority[ProjectPriority["MEDIUM"] = 0] = "MEDIUM";
    ProjectPriority[ProjectPriority["HIGH"] = 1] = "HIGH";
})(ProjectPriority = exports.ProjectPriority || (exports.ProjectPriority = {}));
var ProjectType;
(function (ProjectType) {
    ProjectType["WEB"] = "Website";
    ProjectType["ANDROID"] = "Android";
    ProjectType["IPHONE"] = "IPhone";
    ProjectType["TESTING"] = "Testing";
})(ProjectType = exports.ProjectType || (exports.ProjectType = {}));
var Project = /** @class */ (function () {
    function Project(id, name, status, description, deadline, priority, open_task, type, created, team_leader, comments, bugs, progress) {
        if (status === void 0) { status = ProjectStatus.NEWPROJECTS; }
        if (priority === void 0) { priority = ProjectPriority.MEDIUM; }
        if (type === void 0) { type = ProjectType.WEB; }
        this.id = id;
        this.name = name;
        this.status = status;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.open_task = open_task;
        this.type = type;
        this.created = created;
        this.team_leader = team_leader;
        this.comments = comments;
        this.bugs = bugs;
        this.progress = progress;
    }
    return Project;
}());
exports.Project = Project;
var ProjectAdapter = /** @class */ (function () {
    function ProjectAdapter() {
    }
    ProjectAdapter.prototype.adapt = function (item) {
        var adapted = new Project(Number(item.id), item.name, item.status ? Number(item.status) : undefined, item.description, item.deadline ? new Date(item.deadline) : undefined, item.priority ? Number(item.priority) : undefined, item.open_task, item.type, item.created ? new Date(item.created) : undefined, item.team_leader, item.comments ? Number(item.comments) : undefined, item.bugs ? Number(item.bugs) : undefined, item.progress ? Number(item.progress) : undefined);
        return adapted;
    };
    ProjectAdapter = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProjectAdapter);
    return ProjectAdapter;
}());
exports.ProjectAdapter = ProjectAdapter;
//# sourceMappingURL=project.model.js.map