"use strict";
exports.__esModule = true;
exports.AppModule = exports.createTranslateLoader = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_module_1 = require("./core/core.module");
var shared_module_1 = require("./shared/shared.module");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./layout/header/header.component");
var page_loader_component_1 = require("./layout/page-loader/page-loader.component");
var sidebar_component_1 = require("./layout/sidebar/sidebar.component");
var right_sidebar_component_1 = require("./layout/right-sidebar/right-sidebar.component");
var auth_layout_component_1 = require("./layout/app-layout/auth-layout/auth-layout.component");
var main_layout_component_1 = require("./layout/app-layout/main-layout/main-layout.component");
var fake_backend_1 = require("./core/interceptor/fake-backend");
var error_interceptor_1 = require("./core/interceptor/error.interceptor");
var jwt_interceptor_1 = require("./core/interceptor/jwt.interceptor");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var http_1 = require("@angular/common/http");
var router_1 = require("@ngx-loading-bar/router");
var ngx_scrollbar_1 = require("ngx-scrollbar");
var ngx_toastr_1 = require("ngx-toastr");
function createTranslateLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                page_loader_component_1.PageLoaderComponent,
                sidebar_component_1.SidebarComponent,
                right_sidebar_component_1.RightSidebarComponent,
                auth_layout_component_1.AuthLayoutComponent,
                main_layout_component_1.MainLayoutComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                ngx_scrollbar_1.NgScrollbarModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [http_1.HttpClient]
                    }
                }),
                router_1.LoadingBarRouterModule,
                // core & shared
                core_module_1.CoreModule,
                shared_module_1.SharedModule,
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JwtInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: error_interceptor_1.ErrorInterceptor, multi: true },
                fake_backend_1.fakeBackendProvider,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map