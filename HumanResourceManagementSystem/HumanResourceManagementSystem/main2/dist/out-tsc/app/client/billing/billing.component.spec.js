"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var billing_component_1 = require("./billing.component");
describe("BillingComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [billing_component_1.BillingComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(billing_component_1.BillingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=billing.component.spec.js.map