"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var wizard_component_1 = require("./wizard.component");
describe("WizardComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [wizard_component_1.WizardComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(wizard_component_1.WizardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=wizard.component.spec.js.map