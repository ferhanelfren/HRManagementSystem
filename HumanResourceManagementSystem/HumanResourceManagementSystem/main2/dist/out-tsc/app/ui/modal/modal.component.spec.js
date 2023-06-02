"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var modal_component_1 = require("./modal.component");
describe("ModalComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [modal_component_1.ModalComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(modal_component_1.ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal.component.spec.js.map