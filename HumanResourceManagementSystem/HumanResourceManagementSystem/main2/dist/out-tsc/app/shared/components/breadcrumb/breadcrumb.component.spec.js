"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var testing_1 = require("@angular/core/testing");
var breadcrumb_component_1 = require("./breadcrumb.component");
describe('BreadcrumbComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [breadcrumb_component_1.BreadcrumbComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(breadcrumb_component_1.BreadcrumbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=breadcrumb.component.spec.js.map