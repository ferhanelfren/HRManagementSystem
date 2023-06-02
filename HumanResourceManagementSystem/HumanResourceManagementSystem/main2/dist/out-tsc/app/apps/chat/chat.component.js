"use strict";
exports.__esModule = true;
exports.ChatComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.hideRequiredControl = new forms_1.UntypedFormControl(false);
        // constructor
    }
    ChatComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss']
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map