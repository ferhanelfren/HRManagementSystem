"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var edit_holiday_component_1 = require("./edit-holiday.component");
describe("EditHolidayComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [edit_holiday_component_1.EditHolidayComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(edit_holiday_component_1.EditHolidayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-holiday.component.spec.js.map