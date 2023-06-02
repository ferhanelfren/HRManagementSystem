"use strict";
exports.__esModule = true;
exports.AddHolidayComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddHolidayComponent = /** @class */ (function () {
    function AddHolidayComponent(fb) {
        this.fb = fb;
        this.holidayForm = this.fb.group({
            hNo: ['', [forms_1.Validators.required]],
            hName: ['', [forms_1.Validators.required]],
            date: ['', [forms_1.Validators.required]],
            location: ['', [forms_1.Validators.required]],
            shift: ['', [forms_1.Validators.required]],
            details: ['', [forms_1.Validators.required]]
        });
    }
    AddHolidayComponent.prototype.onSubmit = function () {
        console.log('Form Value', this.holidayForm.value);
    };
    AddHolidayComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-add-holiday',
            templateUrl: './add-holiday.component.html',
            styleUrls: ['./add-holiday.component.scss']
        })
    ], AddHolidayComponent);
    return AddHolidayComponent;
}());
exports.AddHolidayComponent = AddHolidayComponent;
//# sourceMappingURL=add-holiday.component.js.map