"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var all_clients_component_1 = require("./all-clients.component");
describe("AllclientComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [all_clients_component_1.AllclientComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(all_clients_component_1.AllclientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=all-clients.component.spec.js.map