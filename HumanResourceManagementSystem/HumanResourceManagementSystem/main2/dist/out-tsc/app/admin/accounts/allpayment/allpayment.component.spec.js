"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var allpayment_component_1 = require("./allpayment.component");
describe("AllpaymentComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [allpayment_component_1.AllpaymentComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(allpayment_component_1.AllpaymentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=allpayment.component.spec.js.map