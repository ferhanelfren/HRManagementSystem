"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var apexchart_component_1 = require("./apexchart.component");
describe("ApexchartComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [apexchart_component_1.ApexchartComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(apexchart_component_1.ApexchartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=apexchart.component.spec.js.map