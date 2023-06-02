"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var google_component_1 = require("./google.component");
describe("GoogleComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [google_component_1.GoogleComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(google_component_1.GoogleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=google.component.spec.js.map