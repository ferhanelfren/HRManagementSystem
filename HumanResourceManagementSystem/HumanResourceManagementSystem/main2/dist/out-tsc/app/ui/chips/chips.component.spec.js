"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var chips_component_1 = require("./chips.component");
describe("ChipsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [chips_component_1.ChipsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(chips_component_1.ChipsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chips.component.spec.js.map