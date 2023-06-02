"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var form_examples_component_1 = require("./form-examples.component");
describe("FormExamplesComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [form_examples_component_1.FormExamplesComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(form_examples_component_1.FormExamplesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-examples.component.spec.js.map