"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var basic_table_component_1 = require("./basic-table.component");
describe("BasicTableComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [basic_table_component_1.BasicTableComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(basic_table_component_1.BasicTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=basic-table.component.spec.js.map