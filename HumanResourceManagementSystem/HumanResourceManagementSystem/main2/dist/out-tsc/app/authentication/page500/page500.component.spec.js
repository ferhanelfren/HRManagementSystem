"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var page500_component_1 = require("./page500.component");
describe("Page500Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [page500_component_1.Page500Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(page500_component_1.Page500Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page500.component.spec.js.map