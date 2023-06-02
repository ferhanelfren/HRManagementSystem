"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var first3_component_1 = require("./first3.component");
describe("First3Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [first3_component_1.First3Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(first3_component_1.First3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=first3.component.spec.js.map