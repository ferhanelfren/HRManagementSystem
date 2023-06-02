"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var add_project_component_1 = require("./add-project.component");
describe("BookprojectsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [add_project_component_1.AddprojectsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(add_project_component_1.AddprojectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-project.component.spec.js.map