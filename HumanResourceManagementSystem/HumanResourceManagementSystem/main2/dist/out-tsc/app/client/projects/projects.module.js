"use strict";
exports.__esModule = true;
exports.ProjectsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var snack_bar_1 = require("@angular/material/snack-bar");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var select_1 = require("@angular/material/select");
var dialog_1 = require("@angular/material/dialog");
var sort_1 = require("@angular/material/sort");
var toolbar_1 = require("@angular/material/toolbar");
var datepicker_1 = require("@angular/material/datepicker");
var checkbox_1 = require("@angular/material/checkbox");
var tabs_1 = require("@angular/material/tabs");
var tooltip_1 = require("@angular/material/tooltip");
var progress_bar_1 = require("@angular/material/progress-bar");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var projects_routing_module_1 = require("./projects-routing.module");
var my_projects_component_1 = require("./my-projects/my-projects.component");
var project_details_component_1 = require("./project-details/project-details.component");
var delete_component_1 = require("./my-projects/dialogs/delete/delete.component");
var form_dialog_component_1 = require("./my-projects/dialogs/form-dialog/form-dialog.component");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                my_projects_component_1.MyProjectsComponent,
                project_details_component_1.ProjectDetailsComponent,
                delete_component_1.DeleteComponent,
                form_dialog_component_1.FormDialogComponent,
            ],
            imports: [
                common_1.CommonModule,
                projects_routing_module_1.ProjectsRoutingModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                snack_bar_1.MatSnackBarModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                dialog_1.MatDialogModule,
                sort_1.MatSortModule,
                toolbar_1.MatToolbarModule,
                select_1.MatSelectModule,
                datepicker_1.MatDatepickerModule,
                tabs_1.MatTabsModule,
                checkbox_1.MatCheckboxModule,
                tooltip_1.MatTooltipModule,
                progress_spinner_1.MatProgressSpinnerModule,
                progress_bar_1.MatProgressBarModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map