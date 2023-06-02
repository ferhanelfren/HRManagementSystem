"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var all_holidays_component_1 = require("./all-holidays.component");
describe("AllholidayComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [all_holidays_component_1.AllholidayComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(all_holidays_component_1.AllholidayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=all-holidays.component.spec.js.map