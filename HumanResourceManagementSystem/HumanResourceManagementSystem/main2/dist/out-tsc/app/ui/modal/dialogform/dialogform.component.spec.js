"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dialogform_component_1 = require("./dialogform.component");
describe("DialogformComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dialogform_component_1.DialogformComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dialogform_component_1.DialogformComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dialogform.component.spec.js.map