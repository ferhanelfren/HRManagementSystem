"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var testing_1 = require("@angular/core/testing");
var leave_report_component_1 = require("./leave-report.component");
describe('LeaveReportComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [leave_report_component_1.LeaveReportComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    fixture = testing_1.TestBed.createComponent(leave_report_component_1.LeaveReportComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=leave-report.component.spec.js.map