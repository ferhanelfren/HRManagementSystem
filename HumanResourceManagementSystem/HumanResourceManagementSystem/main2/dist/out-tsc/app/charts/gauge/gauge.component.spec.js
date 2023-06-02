"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var gauge_component_1 = require("./gauge.component");
describe("GaugeComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [gauge_component_1.GaugeComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(gauge_component_1.GaugeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gauge.component.spec.js.map