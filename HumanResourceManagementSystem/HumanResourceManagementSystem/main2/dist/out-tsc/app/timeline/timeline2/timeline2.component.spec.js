"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var timeline2_component_1 = require("./timeline2.component");
describe("Timeline2Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [timeline2_component_1.Timeline2Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(timeline2_component_1.Timeline2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=timeline2.component.spec.js.map