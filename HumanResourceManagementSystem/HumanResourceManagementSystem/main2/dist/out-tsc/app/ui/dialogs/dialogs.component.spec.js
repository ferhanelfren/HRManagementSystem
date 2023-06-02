"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dialogs_component_1 = require("./dialogs.component");
describe("DialogsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dialogs_component_1.DialogsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dialogs_component_1.DialogsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dialogs.component.spec.js.map