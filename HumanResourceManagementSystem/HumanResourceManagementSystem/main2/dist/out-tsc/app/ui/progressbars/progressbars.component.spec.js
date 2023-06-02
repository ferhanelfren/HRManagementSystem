"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var progressbars_component_1 = require("./progressbars.component");
describe("ProgressbarsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [progressbars_component_1.ProgressbarsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(progressbars_component_1.ProgressbarsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=progressbars.component.spec.js.map