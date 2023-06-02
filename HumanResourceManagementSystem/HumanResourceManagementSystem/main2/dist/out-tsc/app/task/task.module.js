"use strict";
exports.__esModule = true;
exports.TaskModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var task_component_1 = require("./task.component");
var forms_1 = require("@angular/forms");
var ngx_scrollbar_1 = require("ngx-scrollbar");
var task_routing_module_1 = require("./task-routing.module");
var button_1 = require("@angular/material/button");
var datepicker_1 = require("@angular/material/datepicker");
var icon_1 = require("@angular/material/icon");
var form_field_1 = require("@angular/material/form-field");
var menu_1 = require("@angular/material/menu");
var select_1 = require("@angular/material/select");
var checkbox_1 = require("@angular/material/checkbox");
var input_1 = require("@angular/material/input");
var tooltip_1 = require("@angular/material/tooltip");
var radio_1 = require("@angular/material/radio");
var snack_bar_1 = require("@angular/material/snack-bar");
var sidenav_1 = require("@angular/material/sidenav");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var card_1 = require("@angular/material/card");
var sort_1 = require("@angular/material/sort");
var toolbar_1 = require("@angular/material/toolbar");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var components_module_1 = require("../shared/components/components.module");
var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ngx_scrollbar_1.NgScrollbarModule,
                task_routing_module_1.TaskRoutingModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                input_1.MatInputModule,
                tooltip_1.MatTooltipModule,
                datepicker_1.MatDatepickerModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                radio_1.MatRadioModule,
                menu_1.MatMenuModule,
                snack_bar_1.MatSnackBarModule,
                sidenav_1.MatSidenavModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                card_1.MatCardModule,
                sort_1.MatSortModule,
                toolbar_1.MatToolbarModule,
                drag_drop_1.DragDropModule,
                components_module_1.ComponentsModule,
            ],
            declarations: [task_component_1.TaskComponent]
        })
    ], TaskModule);
    return TaskModule;
}());
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map