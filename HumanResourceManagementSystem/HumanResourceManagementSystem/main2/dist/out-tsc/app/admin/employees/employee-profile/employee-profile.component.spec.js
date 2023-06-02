"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var employee_profile_component_1 = require("./employee-profile.component");
describe("EmployeeProfileComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [employee_profile_component_1.EmployeeProfileComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(employee_profile_component_1.EmployeeProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=employee-profile.component.spec.js.map