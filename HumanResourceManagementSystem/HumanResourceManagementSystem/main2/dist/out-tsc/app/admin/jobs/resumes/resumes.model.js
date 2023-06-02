"use strict";
exports.__esModule = true;
exports.Resumes = void 0;
var Resumes = /** @class */ (function () {
    function Resumes(resumes) {
        {
            this.id = resumes.id || this.getRandomID();
            this.img = resumes.img || 'assets/images/user/user1.jpg';
            this.name = resumes.name || '';
            this.title = resumes.title || '';
            this.status = resumes.status || '';
            this.download = resumes.download || '';
            this.role = resumes.role || '';
            this.department = resumes.department || '';
            this.jobType = resumes.jobType || '';
        }
    }
    Resumes.prototype.getRandomID = function () {
        var S4 = function () {
            return ((1 + Math.random()) * 0x10000) | 0;
        };
        return S4() + S4();
    };
    return Resumes;
}());
exports.Resumes = Resumes;
//# sourceMappingURL=resumes.model.js.map