"use strict";
exports.__esModule = true;
exports.ProjectDialogComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var project_model_1 = require("../core/project.model");
var ProjectDialogComponent = /** @class */ (function () {
    function ProjectDialogComponent(formBuilder, data, dialogRef, snackBar, projectService) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.formBuilder = formBuilder;
        this.data = data;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.projectService = projectService;
        this.dialogTitle = data.title;
        this.project = data.project;
        this.statusChoices = project_model_1.ProjectStatus;
        this.priorityChoices = project_model_1.ProjectPriority;
        this.projectType = project_model_1.ProjectType;
        var nonWhiteSpaceRegExp = new RegExp('\\S');
        this.projectForm = this.formBuilder.group({
            name: [
                (_a = this.project) === null || _a === void 0 ? void 0 : _a.name,
                [forms_1.Validators.required, forms_1.Validators.pattern(nonWhiteSpaceRegExp)],
            ],
            status: [
                this.project ? this.project.status : this.statusChoices.NEWPROJECTS,
            ],
            description: [(_b = this.project) === null || _b === void 0 ? void 0 : _b.description],
            deadline: [(_c = this.project) === null || _c === void 0 ? void 0 : _c.deadline],
            priority: [
                this.project ? this.project.priority : this.priorityChoices.MEDIUM,
            ],
            open_task: [(_d = this.project) === null || _d === void 0 ? void 0 : _d.open_task],
            type: [this.project ? this.project.type : this.projectType.WEB],
            created: [(_e = this.project) === null || _e === void 0 ? void 0 : _e.created],
            team_leader: [(_f = this.project) === null || _f === void 0 ? void 0 : _f.team_leader],
            progress: [(_g = this.project) === null || _g === void 0 ? void 0 : _g.progress]
        });
    }
    ProjectDialogComponent.prototype.save = function () {
        console.log('save');
        if (!this.projectForm.valid) {
            return;
        }
        if (this.project) {
            // update project object with form values
            Object.assign(this.project, this.projectForm.value);
            this.projectService.updateObject(this.project);
            this.snackBar.open('Project updated Successfully...!!!', '', {
                duration: 2000,
                verticalPosition: 'bottom',
                horizontalPosition: 'center',
                panelClass: 'black'
            });
            this.dialogRef.close();
        }
        else {
            this.projectService.createOject(this.projectForm.value);
            this.snackBar.open('Project created Successfully...!!!', '', {
                duration: 2000,
                verticalPosition: 'bottom',
                horizontalPosition: 'center',
                panelClass: 'black'
            });
            this.dialogRef.close();
        }
    };
    ProjectDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ProjectDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-project-dialog',
            templateUrl: './project-dialog.component.html'
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], ProjectDialogComponent);
    return ProjectDialogComponent;
}());
exports.ProjectDialogComponent = ProjectDialogComponent;
//# sourceMappingURL=project-dialog.component.js.map