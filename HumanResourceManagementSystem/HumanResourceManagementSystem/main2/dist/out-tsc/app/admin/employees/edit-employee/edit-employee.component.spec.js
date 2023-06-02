"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var edit_employee_component_1 = require("./edit-employee.component");
describe("EditEmployeeComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [edit_employee_component_1.EditEmployeeComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(edit_employee_component_1.EditEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-employee.component.spec.js.map