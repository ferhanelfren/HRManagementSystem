"use strict";
exports.__esModule = true;
exports.ProjectService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var ProjectService = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectService, _super);
    function ProjectService(adapter, httpClient) {
        var _this = _super.call(this) || this;
        _this.adapter = adapter;
        _this.httpClient = httpClient;
        _this.trash = new Set([]); // trashed projects' id; set is better for unique ids
        // private _projects: BehaviorSubject<object[]> = new BehaviorSubject([]);
        _this._projects = new rxjs_1.BehaviorSubject([]);
        _this.projects = _this._projects.asObservable();
        _this.API_URL = 'assets/data/projects.json';
        // this._projects.next(PROJECTS); // mock up backend with fake data (not Project objects yet!)
        _this.getAllProjectss();
        return _this;
    }
    /** CRUD METHODS */
    ProjectService.prototype.getAllProjectss = function () {
        var _this = this;
        this.subs.sink = this.httpClient.get(this.API_URL).subscribe({
            next: function (data) {
                _this._projects.next(data); // mock up backend with fake data (not Project objects yet!)
            },
            error: function (error) {
                console.log(error.name + ' ' + error.message);
            }
        });
    };
    ProjectService.prototype.compareProjectGravity = function (a, b) {
        // if at least one of compared project deadlines is not null, compare deadline dates
        // (further date comes first), else compare priority (larger priority comes first)
        if (a.deadline !== null || b.deadline !== null) {
            // simply compare dates without converting to numbers
            return -(a.deadline > b.deadline) || +(a.deadline < b.deadline);
        }
        else {
            return b.priority - a.priority;
        }
    };
    ProjectService.prototype.getObjects = function () {
        var _this = this;
        return this.projects.pipe(operators_1.map(function (data) {
            return data
                .filter(
            // do not return objects marked for delete
            function (item) { return !_this.trash.has(item.id); })
                .map(
            // convert objects to Project instances
            function (item) { return _this.adapter.adapt(item); })
                .sort(_this.compareProjectGravity);
        }));
    };
    ProjectService.prototype.getObjectById = function (id) {
        var _this = this;
        return this.projects.pipe(operators_1.map(function (data) {
            return data
                .filter(
            // find object by id
            function (item) { return item.id === id; })
                .map(
            // convert to Project instance
            function (item) { return _this.adapter.adapt(item); })[0];
        }));
    };
    ProjectService.prototype.createOject = function (project) {
        project.id = this._projects.getValue().length + 1; // mock Project object with fake id (we have no backend)
        this._projects.next(this._projects.getValue().concat(project));
    };
    ProjectService.prototype.updateObject = function (project) {
        var projects = this._projects.getValue();
        var projectIndex = projects.findIndex(function (t) { return t.id === project.id; });
        projects[projectIndex] = project;
        this._projects.next(projects);
    };
    ProjectService.prototype.deleteObject = function (project) {
        this._projects.next(this._projects.getValue().filter(function (t) { return t.id !== project.id; }));
    };
    ProjectService.prototype.detachObject = function (project) {
        // add project id to trash
        this.trash.add(project.id);
        // force emit change for projects observers
        return this._projects.next(this._projects.getValue());
    };
    ProjectService.prototype.attachObject = function (project) {
        // remove project id from trash
        this.trash["delete"](project.id);
        // force emit change for projects observers
        return this._projects.next(this._projects.getValue());
    };
    ProjectService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProjectService);
    return ProjectService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map