"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var font_awesome_component_1 = require("./font-awesome.component");
describe("FontAwesomeComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [font_awesome_component_1.FontAwesomeComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(font_awesome_component_1.FontAwesomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=font-awesome.component.spec.js.map