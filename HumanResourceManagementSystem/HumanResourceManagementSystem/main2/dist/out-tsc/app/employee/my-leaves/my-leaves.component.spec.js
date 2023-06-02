"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var testing_1 = require("@angular/core/testing");
var my_leaves_component_1 = require("./my-leaves.component");
describe('MyLeavesComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [my_leaves_component_1.MyLeavesComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(my_leaves_component_1.MyLeavesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-leaves.component.spec.js.map