"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var form_controls_component_1 = require("./form-controls.component");
describe("FormControlsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [form_controls_component_1.FormControlsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(form_controls_component_1.FormControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-controls.component.spec.js.map