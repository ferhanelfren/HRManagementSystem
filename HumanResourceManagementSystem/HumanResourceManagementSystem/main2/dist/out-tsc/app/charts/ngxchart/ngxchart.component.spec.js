"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var ngxchart_component_1 = require("./ngxchart.component");
describe("NgxchartComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [ngxchart_component_1.NgxchartComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(ngxchart_component_1.NgxchartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ngxchart.component.spec.js.map