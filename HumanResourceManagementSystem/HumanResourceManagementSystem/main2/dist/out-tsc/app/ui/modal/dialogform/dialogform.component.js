"use strict";
exports.__esModule = true;
exports.DialogformComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DialogformComponent = /** @class */ (function () {
    function DialogformComponent(fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.fname = 'John';
        this.lname = 'Deo';
    }
    DialogformComponent.prototype.ngOnInit = function () {
        this.addCusForm = this.fb.group({
            IdProof: null,
            firstname: [
                this.fname,
                [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ],
            lastname: [
                this.lname,
                [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ],
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]]
        });
    };
    DialogformComponent.prototype.closeDialog = function () {
        this.dialog.closeAll();
    };
    DialogformComponent.prototype.onSubmitClick = function () {
        var _a;
        console.log('Form Value', (_a = this.addCusForm) === null || _a === void 0 ? void 0 : _a.value);
    };
    DialogformComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dialogform',
            templateUrl: './dialogform.component.html',
            styleUrls: ['./dialogform.component.scss']
        })
    ], DialogformComponent);
    return DialogformComponent;
}());
exports.DialogformComponent = DialogformComponent;
//# sourceMappingURL=dialogform.component.js.map