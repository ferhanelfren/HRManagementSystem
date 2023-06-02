"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var button_1 = require("@angular/material/button");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var menu_1 = require("@angular/material/menu");
var icon_1 = require("@angular/material/icon");
var tooltip_1 = require("@angular/material/tooltip");
var select_1 = require("@angular/material/select");
var snack_bar_1 = require("@angular/material/snack-bar");
var pipes_1 = require("../core/pipes");
var board_component_1 = require("./board.component");
describe("BoardComponent", function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.NoopAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                drag_drop_1.DragDropModule,
                button_1.MatButtonModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                dialog_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                tooltip_1.MatTooltipModule,
                select_1.MatSelectModule,
                snack_bar_1.MatSnackBarModule,
            ],
            declarations: [board_component_1.BoardComponent, pipes_1.TruncatePipe, pipes_1.PluralPipe],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(board_component_1.BoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create", function () {
        expect(component).toBeTruthy();
    });
    it("should simple adding project work correctly in all lists", function () {
        // given
        var lists = fixture.debugElement.queryAll(platform_browser_1.By.css(".projects"));
        var projectCount = fixture.debugElement.queryAll(platform_browser_1.By.css(".project")).length;
        // when
        lists.forEach(function (item) {
            var input = item.query(platform_browser_1.By.css(".project-list-add input"));
            input.nativeElement.value = "Nowe testowe zadanie";
            input.nativeElement.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter" }));
        });
        fixture.detectChanges();
        // then
        expect(fixture.debugElement.queryAll(platform_browser_1.By.css(".project")).length).toBe(projectCount + lists.length);
    });
    it("should simple add project create project with proper name", function () {
        // given
        var input = fixture.debugElement.query(platform_browser_1.By.css(".project-list-add input"));
        // when
        input.nativeElement.value = "Nowe testowe zadanie";
        input.nativeElement.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter" }));
        fixture.detectChanges();
        // then
        expect(fixture.debugElement.nativeElement.innerHTML.indexOf(input.nativeElement.value)).toBeGreaterThan(-1);
    });
    it("should not add project with empty or whitespace name", function () {
        // given
        var input = fixture.debugElement.query(platform_browser_1.By.css(".project-list-add input"));
        var projectCount = fixture.debugElement.queryAll(platform_browser_1.By.css(".project")).length;
        // when
        input.nativeElement.value = "";
        input.nativeElement.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter" }));
        input.nativeElement.value = " ";
        input.nativeElement.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter" }));
        fixture.detectChanges();
        // then
        expect(fixture.debugElement.queryAll(platform_browser_1.By.css(".project")).length).toBe(projectCount);
    });
    it("should open modal dialog after double click on project", function () {
        // given
        spyOn(component, "editProjectDialog");
        var input = fixture.debugElement.query(platform_browser_1.By.css(".project"));
        // when
        input.nativeElement.dispatchEvent(new MouseEvent("dblclick"));
        // then
        expect(component.editProjectDialog).toHaveBeenCalled();
    });
});
//# sourceMappingURL=board.component.spec.js.map