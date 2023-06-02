"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var page_loader_component_1 = require("./page-loader.component");
describe("PageLoaderComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [page_loader_component_1.PageLoaderComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(page_loader_component_1.PageLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page-loader.component.spec.js.map