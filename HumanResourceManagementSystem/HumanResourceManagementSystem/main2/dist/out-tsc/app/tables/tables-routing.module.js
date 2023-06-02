"use strict";
exports.__esModule = true;
exports.TablesRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var basic_table_component_1 = require("./basic-table/basic-table.component");
var ngx_datatable_component_1 = require("./ngx-datatable/ngx-datatable.component");
var material_table_component_1 = require("./material-table/material-table.component");
var routes = [
    {
        path: "",
        redirectTo: "basic-tables",
        pathMatch: "full"
    },
    {
        path: "basic-tables",
        component: basic_table_component_1.BasicTableComponent
    },
    {
        path: "material-tables",
        component: material_table_component_1.MaterialTableComponent
    },
    {
        path: "ngx-datatable",
        component: ngx_datatable_component_1.NgxDatatableComponent
    },
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());
exports.TablesRoutingModule = TablesRoutingModule;
//# sourceMappingURL=tables-routing.module.js.map