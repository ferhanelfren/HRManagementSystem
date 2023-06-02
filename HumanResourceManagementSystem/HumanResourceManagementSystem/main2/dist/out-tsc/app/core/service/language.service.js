"use strict";
exports.__esModule = true;
exports.LanguageService = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var LanguageService = /** @class */ (function () {
    function LanguageService(translate) {
        this.translate = translate;
        this.languages = ['en', 'es', 'de'];
        var browserLang;
        translate.addLangs(this.languages);
        if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de/) ? browserLang : 'en');
    }
    LanguageService.prototype.setLanguage = function (lang) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    };
    LanguageService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LanguageService);
    return LanguageService;
}());
exports.LanguageService = LanguageService;
//# sourceMappingURL=language.service.js.map