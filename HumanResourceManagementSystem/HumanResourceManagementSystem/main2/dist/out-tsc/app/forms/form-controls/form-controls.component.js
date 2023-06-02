"use strict";
exports.__esModule = true;
exports.FormControlsComponent = exports.MyErrorStateMatcher = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;
var FormControlsComponent = /** @class */ (function () {
    function FormControlsComponent(fb) {
        this.hideRequiredControl = new forms_1.UntypedFormControl(false);
        this.floatLabelControl = new forms_1.UntypedFormControl('auto');
        // checkbox
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
        // Date Picker
        this.startDate = new Date(1990, 0, 1);
        this.date = new forms_1.UntypedFormControl(new Date());
        this.serializedDate = new forms_1.UntypedFormControl(new Date().toISOString());
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' },
        ];
        this.animalControl = new forms_1.UntypedFormControl('', forms_1.Validators.required);
        this.selectFormControl = new forms_1.UntypedFormControl('', forms_1.Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
        this.disableSelect = new forms_1.UntypedFormControl(false);
        this.toppings = new forms_1.UntypedFormControl();
        this.toppingList = [
            'Extra cheese',
            'Mushroom',
            'Onion',
            'Pepperoni',
            'Sausage',
            'Tomato',
        ];
        this.pokemonControl = new forms_1.UntypedFormControl();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' },
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' },
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' },
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            },
        ];
        this.selected = new forms_1.UntypedFormControl('valid', [
            forms_1.Validators.required,
            forms_1.Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
        // Slide toggle
        this.color = 'accent';
        this.myFilter = function (d) {
            var day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
        // Set the minimum to January 1st 5 years in the past and December 31st a year in the future.
        var currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 5, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);
        this.labelForm = fb.group({
            hideRequired: this.hideRequiredControl
        });
        this.fileUploadForm = fb.group({
            fileUpload: ['']
        });
    }
    FormControlsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-form-controls',
            templateUrl: './form-controls.component.html',
            styleUrls: ['./form-controls.component.scss']
        })
    ], FormControlsComponent);
    return FormControlsComponent;
}());
exports.FormControlsComponent = FormControlsComponent;
//# sourceMappingURL=form-controls.component.js.map