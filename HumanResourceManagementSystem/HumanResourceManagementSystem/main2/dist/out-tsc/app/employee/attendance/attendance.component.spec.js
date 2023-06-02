"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var attendance_component_1 = require("./attendance.component");
describe("AttendancesComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [attendance_component_1.AttendancesComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(attendance_component_1.AttendancesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=attendance.component.spec.js.map