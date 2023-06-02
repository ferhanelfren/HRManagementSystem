"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var read_mail_component_1 = require("./read-mail.component");
describe("ReadMailComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.waitForAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [read_mail_component_1.ReadMailComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(read_mail_component_1.ReadMailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=read-mail.component.spec.js.map