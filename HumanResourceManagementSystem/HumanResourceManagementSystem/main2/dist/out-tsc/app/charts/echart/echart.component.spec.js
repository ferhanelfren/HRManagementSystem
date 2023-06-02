"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var echart_component_1 = require("./echart.component");
describe("EchartComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [echart_component_1.EchartComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(echart_component_1.EchartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=echart.component.spec.js.map