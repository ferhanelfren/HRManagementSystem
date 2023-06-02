"use strict";
exports.__esModule = true;
exports.FileUploadComponent = void 0;
var tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(host) {
        this.host = host;
        this.file = null;
    }
    FileUploadComponent_1 = FileUploadComponent;
    FileUploadComponent.prototype.emitFiles = function (event) {
        var file = event && event.item(0);
        this.onChange(file);
        this.file = file;
    };
    FileUploadComponent.prototype.writeValue = function (value) {
        // clear file input
        this.host.nativeElement.value = '';
        this.file = null;
    };
    FileUploadComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FileUploadComponent.prototype.registerOnTouched = function (fn) {
        // add code here
    };
    var FileUploadComponent_1;
    tslib_1.__decorate([
        core_1.HostListener('change', ['$event.target.files'])
    ], FileUploadComponent.prototype, "emitFiles");
    FileUploadComponent = FileUploadComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-file-upload',
            templateUrl: './file-upload.component.html',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: FileUploadComponent_1,
                    multi: true
                },
            ],
            styleUrls: ['./file-upload.component.scss']
        })
    ], FileUploadComponent);
    return FileUploadComponent;
}());
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=file-upload.component.js.map