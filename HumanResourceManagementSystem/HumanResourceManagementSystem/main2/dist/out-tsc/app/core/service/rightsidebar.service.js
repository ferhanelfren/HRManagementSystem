"use strict";
exports.__esModule = true;
exports.RightSidebarService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var RightSidebarService = /** @class */ (function () {
    function RightSidebarService() {
        var _this = this;
        this.sidebarSubject = new rxjs_1.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();
        this.setRightSidebar = function (value) {
            _this.sidebarSubject.next(value);
        };
        // constructor code
    }
    RightSidebarService = tslib_1.__decorate([
        core_1.Injectable()
    ], RightSidebarService);
    return RightSidebarService;
}());
exports.RightSidebarService = RightSidebarService;
//# sourceMappingURL=rightsidebar.service.js.map