"use strict";
exports.__esModule = true;
exports.MultilevelRoutingModule = void 0;
var tslib_1 = require("tslib");
var first3_component_1 = require("./first3/first3.component");
var first2_component_1 = require("./first2/first2.component");
var first1_component_1 = require("./first1/first1.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'first1',
        component: first1_component_1.First1Component
    },
    {
        path: 'first2',
        component: first2_component_1.First2Component
    },
    {
        path: 'first3',
        component: first3_component_1.First3Component
    },
    {
        path: 'secondlevel',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./secondlevel/secondlevel.module'); }).then(function (m) { return m.SecondLevelModule; });
        }
    },
    {
        path: 'thirdlevel',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./thirdlevel/thirdlevel.module'); }).then(function (m) { return m.ThirdlevelModule; });
        }
    },
];
var MultilevelRoutingModule = /** @class */ (function () {
    function MultilevelRoutingModule() {
    }
    MultilevelRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MultilevelRoutingModule);
    return MultilevelRoutingModule;
}());
exports.MultilevelRoutingModule = MultilevelRoutingModule;
//# sourceMappingURL=multilevel-routing.module.js.map