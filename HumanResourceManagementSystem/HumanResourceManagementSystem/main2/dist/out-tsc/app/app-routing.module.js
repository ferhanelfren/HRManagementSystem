"use strict";
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page404_component_1 = require("./authentication/page404/page404.component");
var auth_guard_1 = require("./core/guard/auth.guard");
var role_1 = require("./core/models/role");
var auth_layout_component_1 = require("./layout/app-layout/auth-layout/auth-layout.component");
var main_layout_component_1 = require("./layout/app-layout/main-layout/main-layout.component");
var routes = [
    {
        path: '',
        component: main_layout_component_1.MainLayoutComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
            {
                path: 'admin',
                canActivate: [auth_guard_1.AuthGuard],
                data: {
                    role: role_1.Role.Admin
                },
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./admin/admin.module'); }).then(function (m) { return m.AdminModule; });
                }
            },
            {
                path: 'employee',
                canActivate: [auth_guard_1.AuthGuard],
                data: {
                    role: role_1.Role.Employee
                },
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./employee/employee.module'); }).then(function (m) { return m.EmployeeModule; });
                }
            },
            {
                path: 'client',
                canActivate: [auth_guard_1.AuthGuard],
                data: {
                    role: role_1.Role.Client
                },
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./client/client.module'); }).then(function (m) { return m.ClientModule; });
                }
            },
            {
                path: 'calendar',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./calendar/calendar.module'); }).then(function (m) { return m.CalendarsModule; });
                }
            },
            {
                path: 'task',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./task/task.module'); }).then(function (m) { return m.TaskModule; });
                }
            },
            {
                path: 'contacts',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./contacts/contacts.module'); }).then(function (m) { return m.ContactsModule; });
                }
            },
            {
                path: 'email',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./email/email.module'); }).then(function (m) { return m.EmailModule; });
                }
            },
            {
                path: 'apps',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./apps/apps.module'); }).then(function (m) { return m.AppsModule; });
                }
            },
            {
                path: 'widget',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./widget/widget.module'); }).then(function (m) { return m.WidgetModule; });
                }
            },
            {
                path: 'ui',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./ui/ui.module'); }).then(function (m) { return m.UiModule; }); }
            },
            {
                path: 'forms',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./forms/forms.module'); }).then(function (m) { return m.FormModule; });
                }
            },
            {
                path: 'tables',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./tables/tables.module'); }).then(function (m) { return m.TablesModule; });
                }
            },
            {
                path: 'media',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./media/media.module'); }).then(function (m) { return m.MediaModule; });
                }
            },
            {
                path: 'charts',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./charts/charts.module'); }).then(function (m) { return m.ChartsModule; });
                }
            },
            {
                path: 'timeline',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./timeline/timeline.module'); }).then(function (m) { return m.TimelineModule; });
                }
            },
            {
                path: 'icons',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./icons/icons.module'); }).then(function (m) { return m.IconsModule; });
                }
            },
            {
                path: 'extra-pages',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./extra-pages/extra-pages.module'); }).then(function (m) { return m.ExtraPagesModule; });
                }
            },
            {
                path: 'maps',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./maps/maps.module'); }).then(function (m) { return m.MapsModule; });
                }
            },
            {
                path: 'multilevel',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./multilevel/multilevel.module'); }).then(function (m) { return m.MultilevelModule; });
                }
            },
        ]
    },
    {
        path: 'authentication',
        component: auth_layout_component_1.AuthLayoutComponent,
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./authentication/authentication.module'); }).then(function (m) { return m.AuthenticationModule; });
        }
    },
    { path: '**', component: page404_component_1.Page404Component },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, {})],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map