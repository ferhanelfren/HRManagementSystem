"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var ngx_datatable_component_1 = require("./ngx-datatable.component");
describe("NgxDatatableComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [ngx_datatable_component_1.NgxDatatableComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(ngx_datatable_component_1.NgxDatatableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ngx-datatable.component.spec.js.map