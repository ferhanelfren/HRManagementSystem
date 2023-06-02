"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var second1_component_1 = require("./second1.component");
describe("Second1Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [second1_component_1.Second1Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(second1_component_1.Second1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=second1.component.spec.js.map