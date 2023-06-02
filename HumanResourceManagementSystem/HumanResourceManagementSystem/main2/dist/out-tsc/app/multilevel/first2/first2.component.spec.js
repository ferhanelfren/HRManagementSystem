"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var first2_component_1 = require("./first2.component");
describe("First2Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [first2_component_1.First2Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(first2_component_1.First2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=first2.component.spec.js.map