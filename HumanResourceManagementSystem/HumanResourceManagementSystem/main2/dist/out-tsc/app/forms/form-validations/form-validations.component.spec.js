"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var form_validations_component_1 = require("./form-validations.component");
describe("FormValidationsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [form_validations_component_1.FormValidationsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(form_validations_component_1.FormValidationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-validations.component.spec.js.map