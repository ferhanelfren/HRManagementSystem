"use strict";
exports.__esModule = true;
exports.ModalComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var simpleDialog_component_1 = require("./simpleDialog.component");
var dialogform_component_1 = require("./dialogform/dialogform.component");
var forms_1 = require("@angular/forms");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogModel, fb // private modalService: NgbModal
    ) {
        this.dialogModel = dialogModel;
        this.fb = fb;
        this.closeResult = '';
        this.fname = 'John';
        this.lname = 'Deo';
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.addCusForm = this.fb.group({
            IdProof: null,
            firstname: [
                this.fname,
                [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ],
            lastname: [
                this.lname,
                [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ],
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]]
        });
    };
    ModalComponent.prototype.dialog = function () {
        this.simpleDialog = this.dialogModel.open(simpleDialog_component_1.SimpleDialogComponent);
    };
    ModalComponent.prototype.openDialog = function () {
        this.dialogModel.open(dialogform_component_1.DialogformComponent, {
            width: '640px',
            disableClose: true
        });
    };
    ModalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss']
        })
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map