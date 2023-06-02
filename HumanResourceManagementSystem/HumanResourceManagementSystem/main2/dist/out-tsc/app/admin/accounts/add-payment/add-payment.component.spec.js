"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var add_payment_component_1 = require("./add-payment.component");
describe("AddPaymentComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [add_payment_component_1.AddPaymentComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(add_payment_component_1.AddPaymentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-payment.component.spec.js.map