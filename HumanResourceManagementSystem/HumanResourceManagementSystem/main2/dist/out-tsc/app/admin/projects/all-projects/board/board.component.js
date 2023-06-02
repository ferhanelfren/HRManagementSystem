"use strict";
exports.__esModule = true;
exports.BoardComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var project_model_1 = require("../core/project.model");
var project_dialog_component_1 = require("../project-dialog/project-dialog.component");
var BoardComponent = /** @class */ (function () {
    function BoardComponent(projectService, dialog, snackBar) {
        this.projectService = projectService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.unsorted = function () {
            return 0;
        };
        this.lists = {};
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getObjects().subscribe(function (projects) {
            // split project to status categories
            _this.lists = {
                NEWPROJECTS: projects.filter(function (project) { return project.status === project_model_1.ProjectStatus.NEWPROJECTS; }),
                RUNNING: projects.filter(function (project) { return project.status === project_model_1.ProjectStatus.RUNNING; }),
                ONHOLD: projects.filter(function (project) { return project.status === project_model_1.ProjectStatus.ONHOLD; }),
                FINISHED: projects.filter(function (project) { return project.status === project_model_1.ProjectStatus.FINISHED; })
            };
        });
    };
    BoardComponent.prototype.drop = function (event) {
        if (event.previousContainer !== event.container) {
            var project = event.item.data;
            // project.status = ProjectStatus[event.container.id];
            project.status =
                project_model_1.ProjectStatus[JSON.parse(JSON.stringify(event.container.id))];
            this.projectService.updateObject(project);
        }
    };
    BoardComponent.prototype.addProject = function (name, status) {
        if (!/\S/.test(name)) {
            // do not add project if name is empty or contain white spaces only
            return;
        }
        this.projectService.createOject({
            name: name,
            status: project_model_1.ProjectStatus[status]
        });
    };
    BoardComponent.prototype.removeProject = function (project) {
        var _this = this;
        // show "deleted" info
        // const snack = this.snackBar.open("The Project has been deleted", "Undo");
        var snack = this.snackBar.open('Project deleted Successfully...!!!', 'Undo', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center',
            panelClass: 'snackbar-danger'
        });
        // put project to the trash
        this.projectService.detachObject(project);
        // when snack has been removed (dismissed)
        snack.afterDismissed().subscribe(function (info) {
            if (info.dismissedByAction !== true) {
                // if dismissed not by undo click (so it dissappeared)
                // then get project by id and delete it
                _this.projectService.deleteObject(project);
            }
        });
        // snack action has been taken
        snack.onAction().subscribe(function () {
            // undo button clicked, so remove project from the trash
            _this.projectService.attachObject(project);
        });
    };
    BoardComponent.prototype.newProjectDialog = function () {
        this.dialogOpen('Create new project', null);
    };
    BoardComponent.prototype.editProjectDialog = function (project) {
        this.dialogOpen('Edit project', project);
    };
    BoardComponent.prototype.dialogOpen = function (title, project) {
        var tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        // open angular material dialog
        this.dialog.open(project_dialog_component_1.ProjectDialogComponent, {
            height: '85%',
            width: '55%',
            autoFocus: true,
            data: {
                title: title,
                project: project
            },
            direction: tempDirection
        });
    };
    BoardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-board',
            templateUrl: './board.component.html',
            styleUrls: ['./board.component.scss']
        })
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map