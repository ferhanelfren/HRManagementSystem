"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var chartjs_component_1 = require("./chartjs.component");
describe("ChartjsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [chartjs_component_1.ChartjsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(chartjs_component_1.ChartjsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chartjs.component.spec.js.map