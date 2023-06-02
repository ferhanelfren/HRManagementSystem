"use strict";
exports.__esModule = true;
exports.NgxDatable = void 0;
var NgxDatable = /** @class */ (function () {
    function NgxDatable(departmentList) {
        {
            this.id = departmentList.id || this.getRandomID();
            this.firstName = departmentList.firstName || '';
            this.lastName = departmentList.lastName || '';
            this.gender = departmentList.gender || '';
            this.address = departmentList.address || '';
            this.age = departmentList.age || '';
            this.email = departmentList.email || '';
            this.phone = departmentList.phone || '';
        }
    }
    NgxDatable.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return NgxDatable;
}());
exports.NgxDatable = NgxDatable;
//# sourceMappingURL=ngx-datatable.model.js.map