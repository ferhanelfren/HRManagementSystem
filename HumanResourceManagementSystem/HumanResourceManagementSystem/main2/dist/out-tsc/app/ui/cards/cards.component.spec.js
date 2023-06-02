"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var cards_component_1 = require("./cards.component");
describe("CardsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [cards_component_1.CardsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(cards_component_1.CardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cards.component.spec.js.map