"use strict";
exports.__esModule = true;
exports.PluralPipe = exports.TruncatePipe = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    // text truncation pipe
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = tslib_1.__decorate([
        core_1.Pipe({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());
exports.TruncatePipe = TruncatePipe;
var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    // https://typeofweb.com/odmiana-rzeczownikow-przy-liczebnikach-jezyku-polskim/
    PluralPipe.prototype.transform = function (n, singularNominativ, pluralNominativ, pluralGenitive) {
        if (n === 1) {
            return singularNominativ;
        }
        else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
            return pluralNominativ;
        }
        else {
            return pluralGenitive;
        }
    };
    PluralPipe = tslib_1.__decorate([
        core_1.Pipe({
            name: 'pluralize'
        })
    ], PluralPipe);
    return PluralPipe;
}());
exports.PluralPipe = PluralPipe;
//# sourceMappingURL=pipes.js.map