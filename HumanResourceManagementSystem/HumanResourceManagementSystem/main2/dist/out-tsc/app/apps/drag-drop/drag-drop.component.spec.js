"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var drag_drop_component_1 = require("./drag-drop.component");
describe("DragDropComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [drag_drop_component_1.DragDropComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(drag_drop_component_1.DragDropComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=drag-drop.component.spec.js.map