"use strict";
exports.__esModule = true;
exports.ChipsComponent = void 0;
var tslib_1 = require("tslib");
var keycodes_1 = require("@angular/cdk/keycodes");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var ChipsComponent = /** @class */ (function () {
    function ChipsComponent() {
        var _this = this;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA];
        this.fruitCtrl = new forms_1.UntypedFormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' },
        ];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(operators_1.startWith(null), operators_1.map(function (fruit) {
            return fruit ? _this._filter(fruit) : _this.allFruits.slice();
        }));
    }
    ChipsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.fruitCtrl.setValue(null);
    };
    ChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsComponent.prototype.selected = function (event) {
        this.fruits.push(event.option.viewValue);
        if (this.fruitInput) {
            this.fruitInput.nativeElement.value = '';
        }
        this.fruitCtrl.setValue(null);
    };
    ChipsComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allFruits.filter(function (fruit) { return fruit.toLowerCase().indexOf(filterValue) === 0; });
    };
    tslib_1.__decorate([
        core_1.ViewChild('fruitInput', { static: true })
    ], ChipsComponent.prototype, "fruitInput");
    tslib_1.__decorate([
        core_1.ViewChild('auto', { static: true })
    ], ChipsComponent.prototype, "matAutocomplete");
    ChipsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-chips',
            templateUrl: './chips.component.html',
            styleUrls: ['./chips.component.scss']
        })
    ], ChipsComponent);
    return ChipsComponent;
}());
exports.ChipsComponent = ChipsComponent;
//# sourceMappingURL=chips.component.js.map