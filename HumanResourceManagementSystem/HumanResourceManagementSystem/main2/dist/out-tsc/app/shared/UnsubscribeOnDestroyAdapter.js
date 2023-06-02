"use strict";
exports.__esModule = true;
exports.UnsubscribeOnDestroyAdapter = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var sub_sink_1 = require("./sub-sink");
/**
 * A class that automatically unsubscribes all observables when the object gets destroyed
 */
var UnsubscribeOnDestroyAdapter = /** @class */ (function () {
    function UnsubscribeOnDestroyAdapter() {
        /**
         * The subscription sink object that stores all subscriptions
         */
        this.subs = new sub_sink_1.SubSink();
    }
    /**
     * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
     */
    UnsubscribeOnDestroyAdapter.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    UnsubscribeOnDestroyAdapter = tslib_1.__decorate([
        core_1.Injectable()
    ], UnsubscribeOnDestroyAdapter);
    return UnsubscribeOnDestroyAdapter;
}());
exports.UnsubscribeOnDestroyAdapter = UnsubscribeOnDestroyAdapter;
//# sourceMappingURL=UnsubscribeOnDestroyAdapter.js.map