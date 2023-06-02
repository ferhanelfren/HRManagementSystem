"use strict";
exports.__esModule = true;
exports.UiModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ui_routing_module_1 = require("./ui-routing.module");
var alerts_component_1 = require("./alerts/alerts.component");
var badge_component_1 = require("./badge/badge.component");
var buttons_component_1 = require("./buttons/buttons.component");
var cards_component_1 = require("./cards/cards.component");
var dialogs_component_1 = require("./dialogs/dialogs.component");
var helper_classes_component_1 = require("./helper-classes/helper-classes.component");
var labels_component_1 = require("./labels/labels.component");
var list_group_component_1 = require("./list-group/list-group.component");
var modal_component_1 = require("./modal/modal.component");
var preloaders_component_1 = require("./preloaders/preloaders.component");
var progressbars_component_1 = require("./progressbars/progressbars.component");
var tabs_component_1 = require("./tabs/tabs.component");
var typography_component_1 = require("./typography/typography.component");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var badge_1 = require("@angular/material/badge");
var chips_1 = require("@angular/material/chips");
var autocomplete_1 = require("@angular/material/autocomplete");
var bottom_sheet_1 = require("@angular/material/bottom-sheet");
var list_1 = require("@angular/material/list");
var sidenav_1 = require("@angular/material/sidenav");
var snack_bar_1 = require("@angular/material/snack-bar");
var expansion_1 = require("@angular/material/expansion");
var datepicker_1 = require("@angular/material/datepicker");
var card_1 = require("@angular/material/card");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var progress_bar_1 = require("@angular/material/progress-bar");
var slider_1 = require("@angular/material/slider");
var tabs_1 = require("@angular/material/tabs");
var checkbox_1 = require("@angular/material/checkbox");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var chips_component_1 = require("./chips/chips.component");
var bottom_sheet_component_1 = require("./bottom-sheet/bottom-sheet.component");
var snackbar_component_1 = require("./snackbar/snackbar.component");
var expansion_panel_component_1 = require("./expansion-panel/expansion-panel.component");
var simpleDialog_component_1 = require("./modal/simpleDialog.component");
var dialogform_component_1 = require("./modal/dialogform/dialogform.component");
var bottom_sheet_component_2 = require("./bottom-sheet/bottom-sheet.component");
var menu_1 = require("@angular/material/menu");
var dialog_1 = require("@angular/material/dialog");
var components_module_1 = require("../shared/components/components.module");
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                alerts_component_1.AlertsComponent,
                badge_component_1.BadgeComponent,
                buttons_component_1.ButtonsComponent,
                cards_component_1.CardsComponent,
                dialogs_component_1.DialogsComponent,
                helper_classes_component_1.HelperClassesComponent,
                labels_component_1.LabelsComponent,
                list_group_component_1.ListGroupComponent,
                modal_component_1.ModalComponent,
                preloaders_component_1.PreloadersComponent,
                progressbars_component_1.ProgressbarsComponent,
                tabs_component_1.TabsComponent,
                typography_component_1.TypographyComponent,
                chips_component_1.ChipsComponent,
                bottom_sheet_component_1.BottomSheetComponent,
                snackbar_component_1.SnackbarComponent,
                expansion_panel_component_1.ExpansionPanelComponent,
                simpleDialog_component_1.SimpleDialogComponent,
                dialogform_component_1.DialogformComponent,
                bottom_sheet_component_2.BottomSheetOverviewExampleSheetComponent,
            ],
            imports: [
                common_1.CommonModule,
                ui_routing_module_1.UiRoutingModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                forms_1.FormsModule,
                badge_1.MatBadgeModule,
                chips_1.MatChipsModule,
                autocomplete_1.MatAutocompleteModule,
                bottom_sheet_1.MatBottomSheetModule,
                list_1.MatListModule,
                sidenav_1.MatSidenavModule,
                snack_bar_1.MatSnackBarModule,
                expansion_1.MatExpansionModule,
                datepicker_1.MatDatepickerModule,
                card_1.MatCardModule,
                progress_spinner_1.MatProgressSpinnerModule,
                progress_bar_1.MatProgressBarModule,
                slider_1.MatSliderModule,
                tabs_1.MatTabsModule,
                checkbox_1.MatCheckboxModule,
                menu_1.MatMenuModule,
                forms_1.ReactiveFormsModule,
                dialog_1.MatDialogModule,
                components_module_1.ComponentsModule,
            ]
        })
    ], UiModule);
    return UiModule;
}());
exports.UiModule = UiModule;
//# sourceMappingURL=ui.module.js.map