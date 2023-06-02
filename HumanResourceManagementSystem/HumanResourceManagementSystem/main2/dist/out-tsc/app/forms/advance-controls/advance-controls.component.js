"use strict";
exports.__esModule = true;
exports.AdvanceControlsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AdvanceControlsComponent = /** @class */ (function () {
    function AdvanceControlsComponent() {
        this.hide = true;
        this.myControl = new forms_1.UntypedFormControl();
        this.options = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
        this.email = new forms_1.UntypedFormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        //constructor
    }
    AdvanceControlsComponent.prototype.ngOnInit = function () {
        // this.filteredOptions = this.myControl.valueChanges.pipe(
        //   startWith(''),
        //   map((value) => (typeof value === 'string' ? value : value.name)),
        //   map((name) => (name ? this._filter(name) : this.options.slice()))
        // );
    };
    AdvanceControlsComponent.prototype.displayFn = function (user) {
        return user && user.name ? user.name : '';
    };
    AdvanceControlsComponent.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AdvanceControlsComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required')
            ? 'You must enter a value'
            : this.email.hasError('email')
                ? 'Not a valid email'
                : '';
    };
    AdvanceControlsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-advance-controls',
            templateUrl: './advance-controls.component.html',
            styleUrls: ['./advance-controls.component.scss']
        })
    ], AdvanceControlsComponent);
    return AdvanceControlsComponent;
}());
exports.AdvanceControlsComponent = AdvanceControlsComponent;
//# sourceMappingURL=advance-controls.component.js.map