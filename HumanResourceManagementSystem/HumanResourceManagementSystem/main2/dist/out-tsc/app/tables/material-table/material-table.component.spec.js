"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var material_table_component_1 = require("./material-table.component");
describe("MaterialTableComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [material_table_component_1.MaterialTableComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(material_table_component_1.MaterialTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=material-table.component.spec.js.map