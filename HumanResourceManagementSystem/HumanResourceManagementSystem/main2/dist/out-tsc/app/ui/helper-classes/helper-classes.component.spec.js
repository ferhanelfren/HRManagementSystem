"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var helper_classes_component_1 = require("./helper-classes.component");
describe("HelperClassesComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [helper_classes_component_1.HelperClassesComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(helper_classes_component_1.HelperClassesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=helper-classes.component.spec.js.map