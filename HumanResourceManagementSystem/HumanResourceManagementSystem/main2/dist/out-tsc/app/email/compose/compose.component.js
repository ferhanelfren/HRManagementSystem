"use strict";
exports.__esModule = true;
exports.ComposeComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
var ComposeComponent = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function ComposeComponent() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.Editor = ClassicEditor;
    }
    ComposeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-compose',
            templateUrl: './compose.component.html',
            styleUrls: ['./compose.component.scss']
        })
    ], ComposeComponent);
    return ComposeComponent;
}());
exports.ComposeComponent = ComposeComponent;
//# sourceMappingURL=compose.component.js.map