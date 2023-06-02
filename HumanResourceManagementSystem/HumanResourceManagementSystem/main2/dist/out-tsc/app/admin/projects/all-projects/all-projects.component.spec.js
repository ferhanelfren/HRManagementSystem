"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var viewprojects_component_1 = require("./viewprojects.component");
describe("ViewprojectsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [viewprojects_component_1.ViewprojectsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(viewprojects_component_1.ViewprojectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=all-projects.component.spec.js.map