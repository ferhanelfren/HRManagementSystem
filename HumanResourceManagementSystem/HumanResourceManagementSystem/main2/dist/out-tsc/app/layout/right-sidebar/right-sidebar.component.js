"use strict";
exports.__esModule = true;
exports.RightSidebarComponent = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var UnsubscribeOnDestroyAdapter_1 = require("src/app/shared/UnsubscribeOnDestroyAdapter");
var RightSidebarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RightSidebarComponent, _super);
    function RightSidebarComponent(document, renderer, elementRef, rightSidebarService, configService, directionService) {
        var _this = _super.call(this) || this;
        _this.document = document;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.rightSidebarService = rightSidebarService;
        _this.configService = configService;
        _this.directionService = directionService;
        _this.selectedBgColor = 'white';
        _this.showpanel = false;
        _this.isDarkSidebar = false;
        _this.isDarTheme = false;
        _this.headerHeight = 60;
        _this.isRtl = false;
        return _this;
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.configData;
        this.subs.sink = this.rightSidebarService.sidebarState.subscribe(function (isRunning) {
            _this.isOpenSidebar = isRunning;
        });
        this.setRightSidebarWindowHeight();
    };
    RightSidebarComponent.prototype.ngAfterViewInit = function () {
        // set header color on startup
        if (localStorage.getItem('choose_skin')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
            this.selectedBgColor = localStorage.getItem('choose_skin_active');
        }
        else {
            this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem('menuOption')) {
            if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
        }
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
        }
        if (localStorage.getItem('isRtl')) {
            if (localStorage.getItem('isRtl') === 'true') {
                this.setRTLSettings();
            }
            else if (localStorage.getItem('isRtl') === 'false') {
                this.setLTRSettings();
            }
        }
        else {
            if (this.config.layout.rtl == true) {
                this.setRTLSettings();
            }
            else {
                this.setLTRSettings();
            }
        }
    };
    RightSidebarComponent.prototype.selectTheme = function (e) {
        this.selectedBgColor = e;
        var prevTheme = this.elementRef.nativeElement
            .querySelector('.settingSidebar .choose-theme li.active')
            .getAttribute('data-theme');
        this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
        this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin_active', this.selectedBgColor);
    };
    RightSidebarComponent.prototype.lightSidebarBtnClick = function () {
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        var menuOption = 'menu_light';
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('menuOption', menuOption);
    };
    RightSidebarComponent.prototype.darkSidebarBtnClick = function () {
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        var menuOption = 'menu_dark';
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('menuOption', menuOption);
    };
    RightSidebarComponent.prototype.lightThemeBtnClick = function () {
        this.renderer.removeClass(this.document.body, 'dark');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
        }
        else {
            this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, 'light');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'theme-white');
        var theme = 'light';
        var menuOption = 'menu_light';
        this.selectedBgColor = 'white';
        this.isDarkSidebar = false;
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('choose_skin', 'theme-white');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    };
    RightSidebarComponent.prototype.darkThemeBtnClick = function () {
        this.renderer.removeClass(this.document.body, 'light');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
        }
        else {
            this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, 'dark');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'theme-black');
        var theme = 'dark';
        var menuOption = 'menu_dark';
        this.selectedBgColor = 'black';
        this.isDarkSidebar = true;
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('choose_skin', 'theme-black');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    };
    RightSidebarComponent.prototype.setRightSidebarWindowHeight = function () {
        this.innerHeight = window.innerHeight;
        var height = this.innerHeight - this.headerHeight;
        this.maxHeight = height + '';
        this.maxWidth = '500px';
    };
    RightSidebarComponent.prototype.onClickedOutside = function (event) {
        var button = event.target;
        if (button.id !== 'settingBtn') {
            if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
            }
        }
    };
    RightSidebarComponent.prototype.toggleRightSidebar = function () {
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    };
    RightSidebarComponent.prototype.switchDirection = function (event) {
        var isrtl = String(event.checked);
        if (isrtl === 'false' &&
            document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].removeAttribute('dir');
            this.renderer.removeClass(this.document.body, 'rtl');
            this.directionService.updateDirection('ltr');
        }
        else if (isrtl === 'true' &&
            !document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            this.renderer.addClass(this.document.body, 'rtl');
            this.directionService.updateDirection('rtl');
        }
        localStorage.setItem('isRtl', isrtl);
        this.isRtl = event.checked;
    };
    RightSidebarComponent.prototype.setRTLSettings = function () {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        this.renderer.addClass(this.document.body, 'rtl');
        this.isRtl = true;
        localStorage.setItem('isRtl', 'true');
    };
    RightSidebarComponent.prototype.setLTRSettings = function () {
        document.getElementsByTagName('html')[0].removeAttribute('dir');
        this.renderer.removeClass(this.document.body, 'rtl');
        this.isRtl = false;
        localStorage.setItem('isRtl', 'false');
    };
    RightSidebarComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'app-right-sidebar',
            templateUrl: './right-sidebar.component.html',
            styleUrls: ['./right-sidebar.component.scss']
        }),
        tslib_1.__param(0, core_1.Inject(common_1.DOCUMENT))
    ], RightSidebarComponent);
    return RightSidebarComponent;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.RightSidebarComponent = RightSidebarComponent;
//# sourceMappingURL=right-sidebar.component.js.map