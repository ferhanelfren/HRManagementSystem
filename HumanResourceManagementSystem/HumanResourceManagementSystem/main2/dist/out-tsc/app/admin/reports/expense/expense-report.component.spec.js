"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var testing_1 = require("@angular/core/testing");
var expense_report_component_1 = require("./expense-report.component");
describe("ExpenseComponent", function () {
    var component;
    var fixture;
    beforeEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [expense_report_component_1.ExpenseComponent]
                    }).compileComponents()];
                case 1:
                    _a.sent();
                    fixture = testing_1.TestBed.createComponent(expense_report_component_1.ExpenseComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=expense-report.component.spec.js.map