"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var allemployees_component_1 = require("./allemployees.component");
describe("AllemployeesComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [allemployees_component_1.AllemployeesComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(allemployees_component_1.AllemployeesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=allemployees.component.spec.js.map