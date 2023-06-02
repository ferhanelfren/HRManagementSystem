"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular/material/button");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var menu_1 = require("@angular/material/menu");
var icon_1 = require("@angular/material/icon");
var select_1 = require("@angular/material/select");
var snack_bar_1 = require("@angular/material/snack-bar");
var project_dialog_component_1 = require("./project-dialog.component");
describe("ProjectDialogComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.NoopAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                button_1.MatButtonModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                dialog_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                select_1.MatSelectModule,
                snack_bar_1.MatSnackBarModule,
            ],
            declarations: [project_dialog_component_1.ProjectDialogComponent],
            providers: [
                {
                    provide: dialog_1.MatDialogRef,
                    useValue: {}
                },
                {
                    provide: dialog_1.MAT_DIALOG_DATA,
                    useValue: {}
                },
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(project_dialog_component_1.ProjectDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
    it("should not add new project when name empty or filled with whitespaces)", function () {
        // given
        spyOn(component, "save");
        var button = fixture.debugElement.query(platform_browser_1.By.css("button.mat-primary"));
        // when
        [
            "",
            " ",
            "	",
            " 	", // space and tab
        ].forEach(function (value) {
            component.form.controls["name"].setValue(value);
            component.form.markAsDirty();
            fixture.detectChanges();
            button.nativeElement.dispatchEvent(new MouseEvent("click"));
        });
        // then
        expect(component.save).not.toHaveBeenCalled();
    });
    it("should add new project when name is filled", function () {
        // given
        spyOn(component, "save");
        var button = fixture.debugElement.query(platform_browser_1.By.css("button.mat-primary"));
        // when
        component.form.controls["name"].setValue("Nowe testowe zadanie");
        component.form.markAsDirty();
        fixture.detectChanges();
        button.nativeElement.dispatchEvent(new MouseEvent("click"));
        // then
        expect(component.save).toHaveBeenCalled();
    });
});
//# sourceMappingURL=project-dialog.component.spec.js.map