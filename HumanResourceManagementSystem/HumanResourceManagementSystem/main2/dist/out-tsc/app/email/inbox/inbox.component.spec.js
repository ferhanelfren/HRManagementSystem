"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var inbox_component_1 = require("./inbox.component");
describe("InboxComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [inbox_component_1.InboxComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(inbox_component_1.InboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inbox.component.spec.js.map