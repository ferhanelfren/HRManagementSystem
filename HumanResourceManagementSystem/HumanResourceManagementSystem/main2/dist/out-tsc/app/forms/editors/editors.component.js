"use strict";
exports.__esModule = true;
exports.EditorsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
var EditorsComponent = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function EditorsComponent() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.Editor = ClassicEditor;
    }
    EditorsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-editors',
            templateUrl: './editors.component.html',
            styleUrls: ['./editors.component.scss']
        })
    ], EditorsComponent);
    return EditorsComponent;
}());
exports.EditorsComponent = EditorsComponent;
//# sourceMappingURL=editors.component.js.map