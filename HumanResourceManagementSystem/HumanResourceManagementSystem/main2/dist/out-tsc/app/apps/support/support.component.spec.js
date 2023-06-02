"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var support_component_1 = require("./support.component");
describe("SupportComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [support_component_1.SupportComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(support_component_1.SupportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=support.component.spec.js.map