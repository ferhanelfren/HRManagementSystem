"use strict";
exports.__esModule = true;
exports.NgxDatatableComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var forms_1 = require("@angular/forms");
// import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
// declare const M: any;
var NgxDatatableComponent = /** @class */ (function () {
    function NgxDatatableComponent(fb, _snackBar // private modalService: NgbModal
    ) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.rows = [];
        this.newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.SortType = ngx_datatable_1.SortType;
        this.columns = [
            { name: 'First Name' },
            { name: 'Last Name' },
            { name: 'Gender' },
            { name: 'Phone' },
            { name: 'Email' },
            { name: 'Address' },
        ];
        this.genders = [
            { id: '1', value: 'Male' },
            { id: '2', value: 'Female' },
        ];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'First Name' },
            { name: 'Last Name' },
            { name: 'Address' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new forms_1.UntypedFormControl(),
            img: new forms_1.UntypedFormControl(),
            firstName: new forms_1.UntypedFormControl(),
            lastName: new forms_1.UntypedFormControl(),
            phone: new forms_1.UntypedFormControl(),
            email: new forms_1.UntypedFormControl(),
            address: new forms_1.UntypedFormControl()
        });
    }
    NgxDatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetch(function (data) {
            _this.data = data;
            _this.filteredData = data;
        });
        // Table 2
        this.tb2fetch(function (data) {
            _this.tb2data = data;
            _this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            id: [''],
            img: [''],
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+')]],
            lastName: [''],
            phone: ['', [forms_1.Validators.required]],
            gender: ['', [forms_1.Validators.required]],
            email: [
                '',
                [forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.minLength(5)],
            ],
            address: ['']
        });
    };
    NgxDatatableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/adv-tbl-data.json');
        req.onload = function () {
            var data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    };
    // Table 2
    NgxDatatableComponent.prototype.tb2fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = function () {
            var data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    };
    // Table 2
    NgxDatatableComponent.prototype.tb2filterDatatable = function (event) {
        // get the value of the key pressed and make it lowercase
        var val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        var colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        // const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (var i = 0; i < colsAmt; i++) {
                // check for a match
                if (item.firstName.toString().toLowerCase().indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
            return false;
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    };
    NgxDatatableComponent.prototype.deleteRow = function (row) {
        this.data = this.arrayRemove(this.data, row.id);
        this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
    };
    NgxDatatableComponent.prototype.arrayRemove = function (array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    };
    NgxDatatableComponent.prototype.filterDatatable = function (event) {
        var val = event.target.value.toLowerCase();
        var colsAmt = this.columns.length;
        this.data = this.filteredData.filter(function (item) {
            for (var i = 0; i < colsAmt; i++) {
                if (item.firstName.toString().toLowerCase().indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
            return false;
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    NgxDatatableComponent.prototype.getId = function (min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    NgxDatatableComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red']
        });
    };
    NgxDatatableComponent.prototype.showNotification = function (colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild(ngx_datatable_1.DatatableComponent, { static: false })
    ], NgxDatatableComponent.prototype, "table");
    tslib_1.__decorate([
        core_1.ViewChild(ngx_datatable_1.DatatableComponent, { static: false })
    ], NgxDatatableComponent.prototype, "table2");
    NgxDatatableComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-ngx-datatable',
            templateUrl: './ngx-datatable.component.html',
            styleUrls: ['./ngx-datatable.component.scss']
        })
    ], NgxDatatableComponent);
    return NgxDatatableComponent;
}());
exports.NgxDatatableComponent = NgxDatatableComponent;
//# sourceMappingURL=ngx-datatable.component.js.map