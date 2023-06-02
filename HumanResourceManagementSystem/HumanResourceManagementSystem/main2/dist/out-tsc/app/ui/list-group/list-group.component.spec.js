"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var list_group_component_1 = require("./list-group.component");
describe("ListGroupComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [list_group_component_1.ListGroupComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(list_group_component_1.ListGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-group.component.spec.js.map