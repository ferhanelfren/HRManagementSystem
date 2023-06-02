"use strict";
exports.__esModule = true;
exports.AddprojectsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
var AddprojectsComponent = /** @class */ (function () {
    function AddprojectsComponent(fb) {
        this.fb = fb;
        this.hide3 = true;
        this.agree3 = false;
        this.Editor = ClassicEditor;
        this.teamList = [
            'Sarah Smith',
            'John Deo',
            'Pankaj Patel',
            'Pooja Sharma',
        ];
        this.projectForm = this.fb.group({
            projectID: ['', [forms_1.Validators.required]],
            projectTitle: ['', [forms_1.Validators.required]],
            department: ['', [forms_1.Validators.required]],
            priority: ['', [forms_1.Validators.required]],
            client: ['', [forms_1.Validators.required]],
            price: ['', [forms_1.Validators.required]],
            startDate: ['', [forms_1.Validators.required]],
            endDate: ['', [forms_1.Validators.required]],
            team: ['', [forms_1.Validators.required]],
            status: ['', [forms_1.Validators.required]],
            fileUpload: ['']
        });
    }
    AddprojectsComponent.prototype.onSubmit = function () {
        console.log('Form Value', this.projectForm.value);
    };
    AddprojectsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-add-project',
            templateUrl: './add-project.component.html',
            styleUrls: ['./add-project.component.scss']
        })
    ], AddprojectsComponent);
    return AddprojectsComponent;
}());
exports.AddprojectsComponent = AddprojectsComponent;
//# sourceMappingURL=add-project.component.js.map