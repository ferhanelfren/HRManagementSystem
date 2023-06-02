"use strict";
exports.__esModule = true;
exports.TablesModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var tables_routing_module_1 = require("./tables-routing.module");
var basic_table_component_1 = require("./basic-table/basic-table.component");
var ngx_datatable_component_1 = require("./ngx-datatable/ngx-datatable.component");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var material_table_component_1 = require("./material-table/material-table.component");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var snack_bar_1 = require("@angular/material/snack-bar");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var select_1 = require("@angular/material/select");
var menu_1 = require("@angular/material/menu");
var components_module_1 = require("../shared/components/components.module");
var shared_module_1 = require("src/app/shared/shared.module");
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                basic_table_component_1.BasicTableComponent,
                ngx_datatable_component_1.NgxDatatableComponent,
                material_table_component_1.MaterialTableComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                tables_routing_module_1.TablesRoutingModule,
                ngx_datatable_1.NgxDatatableModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                snack_bar_1.MatSnackBarModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                select_1.MatSelectModule,
                menu_1.MatMenuModule,
                components_module_1.ComponentsModule,
                shared_module_1.SharedModule,
            ]
        })
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map