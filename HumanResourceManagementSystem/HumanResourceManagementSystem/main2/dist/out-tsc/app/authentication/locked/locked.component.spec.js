"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var locked_component_1 = require("./locked.component");
describe("LockedComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [locked_component_1.LockedComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(locked_component_1.LockedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=locked.component.spec.js.map