"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var second2_component_1 = require("./second2.component");
describe("Second2Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [second2_component_1.Second2Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(second2_component_1.Second2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=second2.component.spec.js.map