"use strict";
exports.__esModule = true;
exports.UiRoutingModule = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cards_component_1 = require("./cards/cards.component");
var dialogs_component_1 = require("./dialogs/dialogs.component");
var labels_component_1 = require("./labels/labels.component");
var list_group_component_1 = require("./list-group/list-group.component");
var preloaders_component_1 = require("./preloaders/preloaders.component");
var tabs_component_1 = require("./tabs/tabs.component");
var typography_component_1 = require("./typography/typography.component");
var helper_classes_component_1 = require("./helper-classes/helper-classes.component");
var alerts_component_1 = require("./alerts/alerts.component");
var badge_component_1 = require("./badge/badge.component");
var buttons_component_1 = require("./buttons/buttons.component");
var progressbars_component_1 = require("./progressbars/progressbars.component");
var modal_component_1 = require("./modal/modal.component");
var chips_component_1 = require("./chips/chips.component");
var bottom_sheet_component_1 = require("./bottom-sheet/bottom-sheet.component");
var snackbar_component_1 = require("./snackbar/snackbar.component");
var expansion_panel_component_1 = require("./expansion-panel/expansion-panel.component");
var routes = [
    {
        path: "alerts",
        component: alerts_component_1.AlertsComponent
    },
    {
        path: "badges",
        component: badge_component_1.BadgeComponent
    },
    {
        path: "chips",
        component: chips_component_1.ChipsComponent
    },
    {
        path: "buttons",
        component: buttons_component_1.ButtonsComponent
    },
    {
        path: "cards",
        component: cards_component_1.CardsComponent
    },
    {
        path: "expansion-panel",
        component: expansion_panel_component_1.ExpansionPanelComponent
    },
    {
        path: "bottom-sheet",
        component: bottom_sheet_component_1.BottomSheetComponent
    },
    {
        path: "dialogs",
        component: dialogs_component_1.DialogsComponent
    },
    {
        path: "labels",
        component: labels_component_1.LabelsComponent
    },
    {
        path: "list-group",
        component: list_group_component_1.ListGroupComponent
    },
    {
        path: "modal",
        component: modal_component_1.ModalComponent
    },
    {
        path: "snackbar",
        component: snackbar_component_1.SnackbarComponent
    },
    {
        path: "preloaders",
        component: preloaders_component_1.PreloadersComponent
    },
    {
        path: "progressbars",
        component: progressbars_component_1.ProgressbarsComponent
    },
    {
        path: "tabs",
        component: tabs_component_1.TabsComponent
    },
    {
        path: "typography",
        component: typography_component_1.TypographyComponent
    },
    {
        path: "helper-classes",
        component: helper_classes_component_1.HelperClassesComponent
    },
];
var UiRoutingModule = /** @class */ (function () {
    function UiRoutingModule() {
    }
    UiRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], UiRoutingModule);
    return UiRoutingModule;
}());
exports.UiRoutingModule = UiRoutingModule;
//# sourceMappingURL=ui-routing.module.js.map