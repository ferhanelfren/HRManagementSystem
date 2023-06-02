"use strict";
exports.__esModule = true;
exports.JobsModule = void 0;
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
var menu_1 = require("@angular/material/menu");
var sort_1 = require("@angular/material/sort");
var toolbar_1 = require("@angular/material/toolbar");
var datepicker_1 = require("@angular/material/datepicker");
var checkbox_1 = require("@angular/material/checkbox");
var tabs_1 = require("@angular/material/tabs");
var tooltip_1 = require("@angular/material/tooltip");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var components_module_1 = require("src/app/shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var jobs_routing_module_1 = require("./jobs-routing.module");
var jobs_list_component_1 = require("./jobs-list/jobs-list.component");
var delete_component_1 = require("./jobs-list/dialogs/delete/delete.component");
var form_dialog_component_1 = require("./jobs-list/dialogs/form-dialog/form-dialog.component");
var jobs_list_service_1 = require("./jobs-list/jobs-list.service");
var resumes_component_1 = require("./resumes/resumes.component");
var delete_component_2 = require("./resumes/dialogs/delete/delete.component");
var form_dialog_component_2 = require("./resumes/dialogs/form-dialog/form-dialog.component");
var resumes_service_1 = require("./resumes/resumes.service");
var candidates_component_1 = require("./candidates/candidates.component");
var delete_component_3 = require("./candidates/dialogs/delete/delete.component");
var form_dialog_component_3 = require("./candidates/dialogs/form-dialog/form-dialog.component");
var candidates_service_1 = require("./candidates/candidates.service");
var shortlist_component_1 = require("./shortlist/shortlist.component");
var delete_component_4 = require("./shortlist/dialogs/delete/delete.component");
var form_dialog_component_4 = require("./shortlist/dialogs/form-dialog/form-dialog.component");
var shortlist_service_1 = require("./shortlist/shortlist.service");
var JobsModule = /** @class */ (function () {
    function JobsModule() {
    }
    JobsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                jobs_list_component_1.JobsListComponent,
                delete_component_1.DeleteDialogComponent,
                form_dialog_component_1.FormDialogComponent,
                resumes_component_1.ResumesComponent,
                delete_component_2.DeleteDialogComponent,
                form_dialog_component_2.FormDialogComponent,
                candidates_component_1.CandidatesComponent,
                delete_component_3.DeleteDialogComponent,
                form_dialog_component_3.FormDialogComponent,
                shortlist_component_1.ShortlistComponent,
                delete_component_4.DeleteDialogComponent,
                form_dialog_component_4.FormDialogComponent,
            ],
            imports: [
                common_1.CommonModule,
                jobs_routing_module_1.JobsRoutingModule,
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
                menu_1.MatMenuModule,
                toolbar_1.MatToolbarModule,
                select_1.MatSelectModule,
                datepicker_1.MatDatepickerModule,
                tabs_1.MatTabsModule,
                checkbox_1.MatCheckboxModule,
                tooltip_1.MatTooltipModule,
                progress_spinner_1.MatProgressSpinnerModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ],
            providers: [
                jobs_list_service_1.JobsListService,
                resumes_service_1.ResumesService,
                candidates_service_1.CandidatesService,
                shortlist_service_1.ShortlistService,
            ]
        })
    ], JobsModule);
    return JobsModule;
}());
exports.JobsModule = JobsModule;
//# sourceMappingURL=jobs.module.js.map