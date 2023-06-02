"use strict";
exports.__esModule = true;
exports.AttendanceSheetComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AttendanceSheetComponent = /** @class */ (function () {
    function AttendanceSheetComponent() {
        this.attendanceForm = new forms_1.UntypedFormGroup({
            fromDate: new forms_1.UntypedFormControl(),
            toDate: new forms_1.UntypedFormControl()
        });
    }
    AttendanceSheetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-attendance-sheet',
            templateUrl: './attendance-sheet.component.html',
            styleUrls: ['./attendance-sheet.component.scss']
        })
    ], AttendanceSheetComponent);
    return AttendanceSheetComponent;
}());
exports.AttendanceSheetComponent = AttendanceSheetComponent;
//# sourceMappingURL=attendance-sheet.component.js.map