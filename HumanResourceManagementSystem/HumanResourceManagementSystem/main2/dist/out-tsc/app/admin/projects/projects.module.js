"use strict";
exports.__esModule = true;
exports.ProjectsModule = void 0;
var tslib_1 = require("tslib");
var pipes_1 = require("./all-projects/core/pipes");
var project_dialog_component_1 = require("./all-projects/project-dialog/project-dialog.component");
var board_component_1 = require("./all-projects/board/board.component");
var all_projects_component_1 = require("./all-projects/all-projects.component");
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
var radio_1 = require("@angular/material/radio");
var datepicker_1 = require("@angular/material/datepicker");
var dialog_1 = require("@angular/material/dialog");
var sort_1 = require("@angular/material/sort");
var checkbox_1 = require("@angular/material/checkbox");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var menu_1 = require("@angular/material/menu");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var chips_1 = require("@angular/material/chips");
var progress_bar_1 = require("@angular/material/progress-bar");
var tabs_1 = require("@angular/material/tabs");
var toolbar_1 = require("@angular/material/toolbar");
var tooltip_1 = require("@angular/material/tooltip");
var ckeditor5_angular_1 = require("@ckeditor/ckeditor5-angular");
var form_dialog_component_1 = require("./estimates/dialog/form-dialog/form-dialog.component");
var delete_component_1 = require("./estimates/dialog/delete/delete.component");
var projects_routing_module_1 = require("./projects-routing.module");
var add_project_component_1 = require("./add-project/add-project.component");
var project_details_component_1 = require("./project-details/project-details.component");
var components_module_1 = require("src/app/shared/components/components.module");
var estimates_component_1 = require("./estimates/estimates.component");
var shared_module_1 = require("src/app/shared/shared.module");
var estimates_service_1 = require("./estimates/estimates.service");
var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                add_project_component_1.AddprojectsComponent,
                all_projects_component_1.AllprojectsComponent,
                board_component_1.BoardComponent,
                project_dialog_component_1.ProjectDialogComponent,
                pipes_1.TruncatePipe,
                pipes_1.PluralPipe,
                project_details_component_1.ProjectDetailsComponent,
                estimates_component_1.EstimatesComponent,
                form_dialog_component_1.FormDialogComponent,
                delete_component_1.DeleteDialogComponent,
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
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                datepicker_1.MatDatepickerModule,
                tooltip_1.MatTooltipModule,
                toolbar_1.MatToolbarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                menu_1.MatMenuModule,
                drag_drop_1.DragDropModule,
                chips_1.MatChipsModule,
                progress_bar_1.MatProgressBarModule,
                tabs_1.MatTabsModule,
                ckeditor5_angular_1.CKEditorModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [estimates_service_1.EstimatesService]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map