"use strict";
exports.__esModule = true;
exports.HeaderComponent = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var HeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderComponent, _super);
    function HeaderComponent(document, renderer, elementRef, configService, authService, router, languageService) {
        var _this = _super.call(this) || this;
        _this.document = document;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.configService = configService;
        _this.authService = authService;
        _this.router = router;
        _this.languageService = languageService;
        _this.isNavbarCollapsed = true;
        _this.countryName = [];
        _this.isFullScreen = false;
        _this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
        ];
        _this.notifications = [
            {
                message: 'Please check your mail',
                time: '14 mins ago',
                icon: 'mail',
                color: 'nfc-green',
                status: 'msg-unread'
            },
            {
                message: 'New Employee Added..',
                time: '22 mins ago',
                icon: 'person_add',
                color: 'nfc-blue',
                status: 'msg-read'
            },
            {
                message: 'Your leave is approved!! ',
                time: '3 hours ago',
                icon: 'event_available',
                color: 'nfc-orange',
                status: 'msg-read'
            },
            {
                message: 'Lets break for lunch...',
                time: '5 hours ago',
                icon: 'lunch_dining',
                color: 'nfc-blue',
                status: 'msg-read'
            },
            {
                message: 'Employee report generated',
                time: '14 mins ago',
                icon: 'description',
                color: 'nfc-green',
                status: 'msg-read'
            },
            {
                message: 'Please check your mail',
                time: '22 mins ago',
                icon: 'mail',
                color: 'nfc-red',
                status: 'msg-read'
            },
            {
                message: 'Salary credited...',
                time: '3 hours ago',
                icon: 'paid',
                color: 'nfc-purple',
                status: 'msg-read'
            },
        ];
        return _this;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.configData;
        var userRole = this.authService.currentUserValue.role;
        this.userImg = this.authService.currentUserValue.img;
        if (userRole === 'Admin') {
            this.homePage = 'admin/dashboard/main';
        }
        else if (userRole === 'Client') {
            this.homePage = 'client/dashboard';
        }
        else if (userRole === 'Employee') {
            this.homePage = 'employee/dashboard';
        }
        else {
            this.homePage = 'admin/dashboard/main';
        }
        this.langStoreValue = localStorage.getItem('lang');
        var val = this.listLang.filter(function (x) { return x.lang === _this.langStoreValue; });
        this.countryName = val.map(function (element) { return element.text; });
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.defaultFlag = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map(function (element) { return element.flag; });
        }
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        // set theme on startup
        if (localStorage.getItem('theme')) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem('menuOption')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
        }
        else {
            this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem('choose_logoheader')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
        }
        else {
            this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem('sidebar_status')) {
            if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
            else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
        }
    };
    HeaderComponent.prototype.callFullscreen = function () {
        var _a;
        if (!this.isFullScreen) {
            (_a = this.docElement) === null || _a === void 0 ? void 0 : _a.requestFullscreen();
        }
        else {
            document.exitFullscreen();
        }
        this.isFullScreen = !this.isFullScreen;
    };
    HeaderComponent.prototype.setLanguage = function (text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.langStoreValue = lang;
        this.languageService.setLanguage(lang);
    };
    HeaderComponent.prototype.mobileMenuSidebarOpen = function (event, className) {
        var hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    };
    HeaderComponent.prototype.callSidemenuCollapse = function () {
        var hasClass = this.document.body.classList.contains('side-closed');
        if (hasClass) {
            this.renderer.removeClass(this.document.body, 'side-closed');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
        else {
            this.renderer.addClass(this.document.body, 'side-closed');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.subs.sink = this.authService.logout().subscribe(function (res) {
            if (!res.success) {
                _this.router.navigate(['/authentication/signin']);
            }
        });
    };
    HeaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        tslib_1.__param(0, core_1.Inject(common_1.DOCUMENT))
    ], HeaderComponent);
    return HeaderComponent;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map