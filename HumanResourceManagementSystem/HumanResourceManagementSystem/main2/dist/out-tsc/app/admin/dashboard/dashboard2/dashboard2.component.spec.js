"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dashboard2_component_1 = require("./dashboard2.component");
describe("Dashboard2Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dashboard2_component_1.Dashboard2Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dashboard2_component_1.Dashboard2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dashboard2.component.spec.js.map