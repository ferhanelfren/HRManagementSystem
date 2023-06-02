"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var page404_component_1 = require("./page404.component");
describe("Page404Component", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [page404_component_1.Page404Component]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(page404_component_1.Page404Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page404.component.spec.js.map