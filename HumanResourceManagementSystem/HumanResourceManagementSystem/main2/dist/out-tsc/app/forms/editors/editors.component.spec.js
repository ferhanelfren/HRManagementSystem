"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var editors_component_1 = require("./editors.component");
describe("EditorsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [editors_component_1.EditorsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(editors_component_1.EditorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=editors.component.spec.js.map