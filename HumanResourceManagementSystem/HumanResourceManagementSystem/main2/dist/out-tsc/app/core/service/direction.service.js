"use strict";
exports.__esModule = true;
exports.DirectionService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var DirectionService = /** @class */ (function () {
    function DirectionService() {
        this.data = new rxjs_1.BehaviorSubject('');
        this.currentData = this.data.asObservable();
        // constructor code
    }
    DirectionService.prototype.updateDirection = function (item) {
        this.data.next(item);
    };
    DirectionService = tslib_1.__decorate([
        core_1.Injectable()
    ], DirectionService);
    return DirectionService;
}());
exports.DirectionService = DirectionService;
//# sourceMappingURL=direction.service.js.map