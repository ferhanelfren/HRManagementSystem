"use strict";
exports.__esModule = true;
exports.TicketsService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var TicketsService = /** @class */ (function (_super) {
    tslib_1.__extends(TicketsService, _super);
    function TicketsService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/tickets.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(TicketsService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    TicketsService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    TicketsService.prototype.getTicketss = function () {
        var _this = this;
        this.subs.sink = this.httpClient.get(this.API_URL).subscribe({
            next: function (data) {
                _this.isTblLoading = false;
                _this.dataChange.next(data);
            },
            error: function (error) {
                _this.isTblLoading = false;
                console.log(error.name + ' ' + error.message);
            }
        });
    };
    TicketsService.prototype.addTicket = function (ticket) {
        this.dialogData = ticket;
        // this.httpClient.post(this.API_URL, ticket)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = ticket;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    TicketsService.prototype.updateTicket = function (ticket) {
        this.dialogData = ticket;
        // this.httpClient.put(this.API_URL + ticket.id, ticket)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = ticket;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    TicketsService.prototype.deleteTicket = function (id) {
        console.log(id);
        // this.httpClient.delete(this.API_URL + id)
        //     .subscribe({
        //       next: (data) => {
        //         console.log(id);
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    TicketsService = tslib_1.__decorate([
        core_1.Injectable()
    ], TicketsService);
    return TicketsService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.TicketsService = TicketsService;
//# sourceMappingURL=tickets.service.js.map