"use strict";
exports.__esModule = true;
exports.HolidayRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var all_holidays_component_1 = require("./all-holidays/all-holidays.component");
var add_holiday_component_1 = require("./add-holiday/add-holiday.component");
var edit_holiday_component_1 = require("./edit-holiday/edit-holiday.component");
var page404_component_1 = require("../../authentication/page404/page404.component");
var routes = [
    {
        path: "all-holidays",
        component: all_holidays_component_1.AllHolidayComponent
    },
    {
        path: "add-holiday",
        component: add_holiday_component_1.AddHolidayComponent
    },
    {
        path: "edit-holiday",
        component: edit_holiday_component_1.EditHolidayComponent
    },
    { path: "**", component: page404_component_1.Page404Component },
];
var HolidayRoutingModule = /** @class */ (function () {
    function HolidayRoutingModule() {
    }
    HolidayRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], HolidayRoutingModule);
    return HolidayRoutingModule;
}());
exports.HolidayRoutingModule = HolidayRoutingModule;
//# sourceMappingURL=holidays-routing.module.js.map