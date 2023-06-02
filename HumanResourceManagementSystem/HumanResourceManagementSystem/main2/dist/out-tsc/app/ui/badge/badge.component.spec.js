"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var badge_component_1 = require("./badge.component");
describe("BadgeComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [badge_component_1.BadgeComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(badge_component_1.BadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=badge.component.spec.js.map