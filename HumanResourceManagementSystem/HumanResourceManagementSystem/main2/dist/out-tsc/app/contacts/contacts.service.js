"use strict";
exports.__esModule = true;
exports.ContactsService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UnsubscribeOnDestroyAdapter_1 = require("../shared/UnsubscribeOnDestroyAdapter");
var ContactsService = /** @class */ (function (_super) {
    tslib_1.__extends(ContactsService, _super);
    function ContactsService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.API_URL = 'assets/data/contacts.json';
        _this.isTblLoading = true;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(ContactsService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: false,
        configurable: true
    });
    ContactsService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    ContactsService.prototype.getAllContactss = function () {
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
    ContactsService.prototype.addContacts = function (contacts) {
        this.dialogData = contacts;
        // this.httpClient.post(this.API_URL, contacts)
        //   .subscribe({
        //     next: (data) => {
        //       this.dialogData = contacts;
        //     },
        //     error: (error: HttpErrorResponse) => {
        //        // error code here
        //     },
        //   });
    };
    ContactsService.prototype.updateContacts = function (contacts) {
        this.dialogData = contacts;
        // this.httpClient.put(this.API_URL + contacts.id, contacts)
        //     .subscribe({
        //       next: (data) => {
        //         this.dialogData = contacts;
        //       },
        //       error: (error: HttpErrorResponse) => {
        //          // error code here
        //       },
        //     });
    };
    ContactsService.prototype.deleteContacts = function (id) {
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
    ContactsService = tslib_1.__decorate([
        core_1.Injectable()
    ], ContactsService);
    return ContactsService;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map