"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var contact_grid_component_1 = require("./contact-grid.component");
describe("ContactGridComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [contact_grid_component_1.ContactGridComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(contact_grid_component_1.ContactGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contact-grid.component.spec.js.map