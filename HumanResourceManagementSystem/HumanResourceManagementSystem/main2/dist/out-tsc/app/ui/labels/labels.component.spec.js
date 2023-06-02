"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var labels_component_1 = require("./labels.component");
describe("LabelsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [labels_component_1.LabelsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(labels_component_1.LabelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=labels.component.spec.js.map