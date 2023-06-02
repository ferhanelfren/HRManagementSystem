"use strict";
exports.__esModule = true;
exports.ClientsService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var ClientsService = /** @class */ (function (_super) {
    tslib_1.__extends(ClientsService, _super);
    function ClientsService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/clients.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(ClientsService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    ClientsService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    ClientsService.prototype.getAllClients = function () {
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
    ClientsService.prototype.addClient = function (clients) {
        this.dialogData = clients;
        // this.httpClient.post(this.API_URL, clients)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = clients;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    ClientsService.prototype.updateClient = function (clients) {
        this.dialogData = clients;
        // this.httpClient.put(this.API_URL + clients.id, clients)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = clients;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    ClientsService.prototype.deleteClient = function (id) {
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
    ClientsService = tslib_1.__decorate([
        core_1.Injectable()
    ], ClientsService);
    return ClientsService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map