"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var add_holiday_component_1 = require("./add-holiday.component");
describe("AddHolidayComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [add_holiday_component_1.AddHolidayComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(add_holiday_component_1.AddHolidayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-holiday.component.spec.js.map