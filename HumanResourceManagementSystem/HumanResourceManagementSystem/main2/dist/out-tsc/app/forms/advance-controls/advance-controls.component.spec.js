"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var advance_controls_component_1 = require("./advance-controls.component");
describe("AdvanceControlsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [advance_controls_component_1.AdvanceControlsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(advance_controls_component_1.AdvanceControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=advance-controls.component.spec.js.map