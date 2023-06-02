"use strict";
exports.__esModule = true;
exports.EditHolidayComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditHolidayComponent = /** @class */ (function () {
    function EditHolidayComponent(fb) {
        this.fb = fb;
        this.formdata = {
            hNo: '01',
            hName: 'World Aids Day',
            date: '2021-12-10T14:22:18Z',
            location: 'All Locations',
            shift: 'All Shifts',
            details: 'This festival is celebrate for.'
        };
        this.holidayForm = this.createContactForm();
    }
    EditHolidayComponent.prototype.onSubmit = function () {
        console.log('Form Value', this.holidayForm.value);
    };
    EditHolidayComponent.prototype.createContactForm = function () {
        return this.fb.group({
            hNo: [this.formdata.hNo, [forms_1.Validators.required]],
            hName: [this.formdata.hName, [forms_1.Validators.required]],
            date: [this.formdata.date, [forms_1.Validators.required]],
            location: [this.formdata.location, [forms_1.Validators.required]],
            shift: [this.formdata.shift, [forms_1.Validators.required]],
            details: [this.formdata.details, [forms_1.Validators.required]]
        });
    };
    EditHolidayComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-edit-holiday',
            templateUrl: './edit-holiday.component.html',
            styleUrls: ['./edit-holiday.component.scss']
        })
    ], EditHolidayComponent);
    return EditHolidayComponent;
}());
exports.EditHolidayComponent = EditHolidayComponent;
//# sourceMappingURL=edit-holiday.component.js.map