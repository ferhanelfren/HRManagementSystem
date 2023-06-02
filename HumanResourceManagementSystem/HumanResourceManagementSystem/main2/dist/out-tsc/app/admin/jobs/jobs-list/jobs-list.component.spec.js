"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var testing_1 = require("@angular/core/testing");
var jobs_list_component_1 = require("./jobs-list.component");
describe('JobsListComponent', function () {
    var component;
    var fixture;
    beforeEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [jobs_list_component_1.JobsListComponent]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    fixture = testing_1.TestBed.createComponent(jobs_list_component_1.JobsListComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=jobs-list.component.spec.js.map