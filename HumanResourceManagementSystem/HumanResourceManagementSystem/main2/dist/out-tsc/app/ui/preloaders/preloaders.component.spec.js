"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var preloaders_component_1 = require("./preloaders.component");
describe("PreloadersComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [preloaders_component_1.PreloadersComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(preloaders_component_1.PreloadersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=preloaders.component.spec.js.map