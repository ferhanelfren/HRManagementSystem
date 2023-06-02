"use strict";
exports.__esModule = true;
exports.CalendarService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var rxjs_2 = require("rxjs");
var operators_1 = require("rxjs/operators");
var CalendarService = /** @class */ (function () {
    function CalendarService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/calendar.json';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.dataChange = new rxjs_1.BehaviorSubject([]);
    }
    Object.defineProperty(CalendarService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    CalendarService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    CalendarService.prototype.getAllCalendars = function () {
        return this.httpClient
            .get(this.API_URL)
            .pipe(operators_1.catchError(this.errorHandler));
    };
    CalendarService.prototype.addUpdateCalendar = function (calendar) {
        this.dialogData = calendar;
    };
    CalendarService.prototype.deleteCalendar = function (calendar) {
        this.dialogData = calendar;
    };
    CalendarService.prototype.errorHandler = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return rxjs_2.throwError(errorMessage);
    };
    CalendarService = tslib_1.__decorate([
        core_1.Injectable()
    ], CalendarService);
    return CalendarService;
}());
exports.CalendarService = CalendarService;
//# sourceMappingURL=calendar.service.js.map