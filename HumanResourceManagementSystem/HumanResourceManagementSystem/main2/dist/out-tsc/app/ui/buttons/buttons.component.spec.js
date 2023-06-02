"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var buttons_component_1 = require("./buttons.component");
describe("ButtonsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [buttons_component_1.ButtonsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(buttons_component_1.ButtonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=buttons.component.spec.js.map