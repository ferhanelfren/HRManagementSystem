"use strict";
exports.__esModule = true;
exports.WizardComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var WizardComponent = /** @class */ (function () {
    function WizardComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    WizardComponent.prototype.ngOnInit = function () {
        this.HFormGroup1 = this._formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required]
        });
        this.HFormGroup2 = this._formBuilder.group({
            address: ['', forms_1.Validators.required]
        });
        this.VFormGroup1 = this._formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required]
        });
        this.VFormGroup2 = this._formBuilder.group({
            address: ['', forms_1.Validators.required]
        });
    };
    WizardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-wizard',
            templateUrl: './wizard.component.html',
            styleUrls: ['./wizard.component.scss']
        })
    ], WizardComponent);
    return WizardComponent;
}());
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=wizard.component.js.map