"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var snackbar_component_1 = require("./snackbar.component");
describe("SnackbarComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [snackbar_component_1.SnackbarComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(snackbar_component_1.SnackbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=snackbar.component.spec.js.map