"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var first1_component_1 = require("./first1.component");
describe("First1Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [first1_component_1.First1Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(first1_component_1.First1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=first1.component.spec.js.map