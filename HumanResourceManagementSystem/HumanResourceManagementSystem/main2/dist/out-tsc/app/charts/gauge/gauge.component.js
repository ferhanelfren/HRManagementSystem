"use strict";
exports.__esModule = true;
exports.GaugeComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var GaugeComponent = /** @class */ (function () {
    // ngx-guage end
    function GaugeComponent() {
        // ngx-guage start
        this.gaugeValue = 28.3;
        this.gaugeSize = 170;
        this.guageThick = 8;
        this.guageType1 = 'full';
        this.guageType2 = 'semi';
        this.guageType3 = 'arch';
        this.gaugeValues = {
            1: 100,
            2: 50,
            3: 50,
            4: 50,
            5: 50,
            6: 50,
            7: 50
        };
        this.percentageValue = function (value) {
            return "" + Math.round(value);
        };
    }
    GaugeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-gauge',
            templateUrl: './gauge.component.html',
            styleUrls: ['./gauge.component.scss']
        })
    ], GaugeComponent);
    return GaugeComponent;
}());
exports.GaugeComponent = GaugeComponent;
//# sourceMappingURL=gauge.component.js.map