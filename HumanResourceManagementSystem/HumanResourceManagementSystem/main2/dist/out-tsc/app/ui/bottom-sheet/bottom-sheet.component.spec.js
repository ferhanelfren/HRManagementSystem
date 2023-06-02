"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var bottom_sheet_component_1 = require("./bottom-sheet.component");
describe("BottomSheetComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [bottom_sheet_component_1.BottomSheetComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(bottom_sheet_component_1.BottomSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bottom-sheet.component.spec.js.map