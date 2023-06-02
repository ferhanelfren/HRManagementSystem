"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var form_dialog_component_1 = require("./form-dialog.component");
describe("FormDialogComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [form_dialog_component_1.FormDialogComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(form_dialog_component_1.FormDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-dialog.component.spec.js.map