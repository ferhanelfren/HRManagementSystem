"use strict";
exports.__esModule = true;
exports.AppsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var ngx_scrollbar_1 = require("ngx-scrollbar");
var sort_1 = require("@angular/material/sort");
var toolbar_1 = require("@angular/material/toolbar");
var tabs_1 = require("@angular/material/tabs");
var menu_1 = require("@angular/material/menu");
var apps_routing_module_1 = require("./apps-routing.module");
var chat_component_1 = require("./chat/chat.component");
var drag_drop_component_1 = require("./drag-drop/drag-drop.component");
var contact_grid_component_1 = require("./contact-grid/contact-grid.component");
var support_component_1 = require("./support/support.component");
var button_1 = require("@angular/material/button");
var datepicker_1 = require("@angular/material/datepicker");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var icon_1 = require("@angular/material/icon");
var snack_bar_1 = require("@angular/material/snack-bar");
var select_1 = require("@angular/material/select");
var checkbox_1 = require("@angular/material/checkbox");
var card_1 = require("@angular/material/card");
var input_1 = require("@angular/material/input");
var tooltip_1 = require("@angular/material/tooltip");
var sidenav_1 = require("@angular/material/sidenav");
var dialog_1 = require("@angular/material/dialog");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var radio_1 = require("@angular/material/radio");
var angular_datetime_picker_1 = require("@danielmoncada/angular-datetime-picker");
var components_module_1 = require("../shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var AppsModule = /** @class */ (function () {
    function AppsModule() {
    }
    AppsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                chat_component_1.ChatComponent,
                drag_drop_component_1.DragDropComponent,
                contact_grid_component_1.ContactGridComponent,
                support_component_1.SupportComponent,
            ],
            imports: [
                common_1.CommonModule,
                apps_routing_module_1.AppsRoutingModule,
                ngx_scrollbar_1.NgScrollbarModule,
                button_1.MatButtonModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                icon_1.MatIconModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule,
                input_1.MatInputModule,
                dialog_1.MatDialogModule,
                tooltip_1.MatTooltipModule,
                datepicker_1.MatDatepickerModule,
                snack_bar_1.MatSnackBarModule,
                drag_drop_1.DragDropModule,
                forms_1.FormsModule,
                sidenav_1.MatSidenavModule,
                form_field_1.MatFormFieldModule,
                sort_1.MatSortModule,
                toolbar_1.MatToolbarModule,
                tabs_1.MatTabsModule,
                menu_1.MatMenuModule,
                card_1.MatCardModule,
                forms_1.ReactiveFormsModule,
                angular_datetime_picker_1.OwlDateTimeModule,
                angular_datetime_picker_1.OwlNativeDateTimeModule,
                radio_1.MatRadioModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ]
        })
    ], AppsModule);
    return AppsModule;
}());
exports.AppsModule = AppsModule;
//# sourceMappingURL=apps.module.js.map