"use strict";
exports.__esModule = true;
exports.SidebarComponent = void 0;
var tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-unused-vars */
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var sidebar_items_1 = require("./sidebar-items");
var role_1 = require("src/app/core/models/role");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(document, renderer, elementRef, authService, router) {
        var _this_1 = this;
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.router = router;
        this.headerHeight = 60;
        this.elementRef.nativeElement.closest('body');
        this.routerObj = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                // close sidebar on mobile screen after menu select
                _this_1.renderer.removeClass(_this_1.document.body, 'overlay-open');
            }
        });
    }
    SidebarComponent.prototype.windowResizecall = function () {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    };
    SidebarComponent.prototype.onGlobalClick = function (event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, 'overlay-open');
        }
    };
    SidebarComponent.prototype.callToggleMenu = function (event, length) {
        if (length > 0) {
            var parentElement = event.target.closest('li');
            var activeClass = parentElement === null || parentElement === void 0 ? void 0 : parentElement.classList.contains('active');
            if (activeClass) {
                this.renderer.removeClass(parentElement, 'active');
            }
            else {
                this.renderer.addClass(parentElement, 'active');
            }
        }
    };
    SidebarComponent.prototype.ngOnInit = function () {
        if (this.authService.currentUserValue) {
            var userRole_1 = this.authService.currentUserValue.role;
            this.userFullName =
                this.authService.currentUserValue.firstName +
                    ' ' +
                    this.authService.currentUserValue.lastName;
            this.userImg = this.authService.currentUserValue.img;
            this.sidebarItems = sidebar_items_1.ROUTES.filter(function (x) { return x.role.indexOf(userRole_1) !== -1 || x.role.indexOf('All') !== -1; });
            if (userRole_1 === role_1.Role.Admin) {
                this.userType = role_1.Role.Admin;
            }
            else if (userRole_1 === role_1.Role.Client) {
                this.userType = role_1.Role.Client;
            }
            else if (userRole_1 === role_1.Role.Employee) {
                this.userType = role_1.Role.Employee;
            }
            else {
                this.userType = role_1.Role.Admin;
            }
        }
        // this.sidebarItems = ROUTES.filter((sidebarItem) => sidebarItem);
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.routerObj.unsubscribe();
    };
    SidebarComponent.prototype.initLeftSidebar = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    };
    SidebarComponent.prototype.setMenuHeight = function () {
        this.innerHeight = window.innerHeight;
        var height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + '';
        this.listMaxWidth = '500px';
    };
    SidebarComponent.prototype.isOpen = function () {
        return this.bodyTag.classList.contains('overlay-open');
    };
    SidebarComponent.prototype.checkStatuForResize = function (firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, 'ls-closed');
        }
        else {
            this.renderer.removeClass(this.document.body, 'ls-closed');
        }
    };
    SidebarComponent.prototype.mouseHover = function () {
        var body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('submenu-closed')) {
            this.renderer.addClass(this.document.body, 'side-closed-hover');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
    };
    SidebarComponent.prototype.mouseOut = function () {
        var body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('side-closed-hover')) {
            this.renderer.removeClass(this.document.body, 'side-closed-hover');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    };
    SidebarComponent.prototype.logout = function () {
        var _this_1 = this;
        this.authService.logout().subscribe(function (res) {
            if (!res.success) {
                _this_1.router.navigate(['/authentication/signin']);
            }
        });
    };
    tslib_1.__decorate([
        core_1.HostListener('window:resize', ['$event'])
    ], SidebarComponent.prototype, "windowResizecall");
    tslib_1.__decorate([
        core_1.HostListener('document:mousedown', ['$event'])
    ], SidebarComponent.prototype, "onGlobalClick");
    SidebarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        }),
        tslib_1.__param(0, core_1.Inject(common_1.DOCUMENT))
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map