"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var myteam_component_1 = require("./myteam.component");
describe("MyTeamsComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [myteam_component_1.MyTeamsComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(myteam_component_1.MyTeamsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=myteam.component.spec.js.map