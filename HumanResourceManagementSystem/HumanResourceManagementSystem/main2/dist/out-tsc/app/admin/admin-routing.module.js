"use strict";
exports.__esModule = true;
exports.AdminRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'dashboard',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./dashboard/dashboard.module'); }).then(function (m) { return m.DashboardModule; });
        }
    },
    {
        path: 'projects',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./projects/projects.module'); }).then(function (m) { return m.ProjectsModule; });
        }
    },
    {
        path: 'employees',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./employees/employees.module'); }).then(function (m) { return m.EmployeesModule; });
        }
    },
    {
        path: 'clients',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./clients/clients.module'); }).then(function (m) { return m.ClientModule; });
        }
    },
    {
        path: 'leaves',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./leaves/leaves.module'); }).then(function (m) { return m.LeavesModule; });
        }
    },
    {
        path: 'accounts',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./accounts/accounts.module'); }).then(function (m) { return m.AccountsModule; });
        }
    },
    {
        path: 'holidays',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./holidays/holidays.module'); }).then(function (m) { return m.HolidayModule; });
        }
    },
    {
        path: 'attendance',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./attendance/attendance.module'); }).then(function (m) { return m.AttendanceModule; });
        }
    },
    {
        path: 'payroll',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./payroll/payroll.module'); }).then(function (m) { return m.PayrollModule; });
        }
    },
    {
        path: 'leads',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./leads/leads.module'); }).then(function (m) { return m.LeadsModule; });
        }
    },
    {
        path: 'jobs',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./jobs/jobs.module'); }).then(function (m) { return m.JobsModule; }); }
    },
    {
        path: 'reports',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./reports/reports.module'); }).then(function (m) { return m.ReportsModule; });
        }
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=admin-routing.module.js.map