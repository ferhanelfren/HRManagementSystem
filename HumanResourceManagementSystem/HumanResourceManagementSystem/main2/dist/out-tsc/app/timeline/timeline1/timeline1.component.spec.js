"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var timeline1_component_1 = require("./timeline1.component");
describe("Timeline1Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [timeline1_component_1.Timeline1Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(timeline1_component_1.Timeline1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=timeline1.component.spec.js.map