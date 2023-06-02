"use strict";
exports.__esModule = true;
exports.ComponentsModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var file_upload_component_1 = require("./file-upload/file-upload.component");
var breadcrumb_component_1 = require("./breadcrumb/breadcrumb.component");
var shared_module_1 = require("../shared.module");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [file_upload_component_1.FileUploadComponent, breadcrumb_component_1.BreadcrumbComponent],
            imports: [shared_module_1.SharedModule],
            exports: [file_upload_component_1.FileUploadComponent, breadcrumb_component_1.BreadcrumbComponent]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map