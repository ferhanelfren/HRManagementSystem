"use strict";
exports.__esModule = true;
exports.CalendarComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var daygrid_1 = require("@fullcalendar/daygrid");
var interaction_1 = require("@fullcalendar/interaction");
var timegrid_1 = require("@fullcalendar/timegrid");
var list_1 = require("@fullcalendar/list");
var forms_1 = require("@angular/forms");
var calendar_model_1 = require("./calendar.model");
var form_dialog_component_1 = require("./dialogs/form-dialog/form-dialog.component");
var events_util_1 = require("./events-util");
var UnsubscribeOnDestroyAdapter_1 = require("../shared/UnsubscribeOnDestroyAdapter");
var CalendarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarComponent, _super);
    function CalendarComponent(fb, dialog, calendarService, snackBar) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.dialog = dialog;
        _this.calendarService = calendarService;
        _this.snackBar = snackBar;
        _this.filterOptions = 'All';
        _this.filterItems = [
            'work',
            'personal',
            'important',
            'travel',
            'friends',
        ];
        _this.filters = [
            { name: 'work', value: 'Work', checked: true },
            { name: 'personal', value: 'Personal', checked: true },
            { name: 'important', value: 'Important', checked: true },
            { name: 'travel', value: 'Travel', checked: true },
            { name: 'friends', value: 'Friends', checked: true },
        ];
        _this.calendarOptions = {
            plugins: [daygrid_1["default"], timegrid_1["default"], list_1["default"], interaction_1["default"]],
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            initialView: 'dayGridMonth',
            weekends: true,
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            select: _this.handleDateSelect.bind(_this),
            eventClick: _this.handleEventClick.bind(_this),
            eventsSet: _this.handleEvents.bind(_this)
        };
        _this.dialogTitle = 'Add New Event';
        var blankObject = {};
        _this.calendar = new calendar_model_1.Calendar(blankObject);
        _this.addCusForm = _this.createCalendarForm(_this.calendar);
        return _this;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.calendarEvents = events_util_1.INITIAL_EVENTS;
        this.tempEvents = this.calendarEvents;
        this.calendarOptions.initialEvents = this.calendarEvents;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    CalendarComponent.prototype.handleDateSelect = function (selectInfo) {
        this.addNewEvent();
    };
    CalendarComponent.prototype.addNewEvent = function () {
        var _this = this;
        var tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        var dialogRef = this.dialog.open(form_dialog_component_1.FormDialogComponent, {
            data: {
                calendar: this.calendar,
                action: 'add'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
            var _a;
            if (result === 'submit') {
                _this.calendarData = _this.calendarService.getDialogData();
                console.log(_this.calendarData.startDate);
                _this.calendarEvents = (_a = _this.calendarEvents) === null || _a === void 0 ? void 0 : _a.concat({
                    // add new event data. must create new array
                    id: _this.calendarData.id,
                    title: _this.calendarData.title,
                    start: _this.calendarData.startDate,
                    end: _this.calendarData.endDate,
                    className: _this.getClassNameValue(_this.calendarData.category),
                    groupId: _this.calendarData.category,
                    details: _this.calendarData.details
                });
                _this.calendarOptions.events = _this.calendarEvents;
                _this.addCusForm.reset();
                _this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
    };
    CalendarComponent.prototype.changeCategory = function (event, filter) {
        if (event.checked) {
            this.filterItems.push(filter.name);
        }
        else {
            this.filterItems.splice(this.filterItems.indexOf(filter.name), 1);
        }
        this.filterEvent(this.filterItems);
    };
    CalendarComponent.prototype.filterEvent = function (element) {
        var _a;
        var list = (_a = this.calendarEvents) === null || _a === void 0 ? void 0 : _a.filter(function (x) {
            return element.map(function (y) { return y; }).includes(x.groupId);
        });
        this.calendarOptions.events = list;
    };
    CalendarComponent.prototype.handleEventClick = function (clickInfo) {
        this.eventClick(clickInfo);
    };
    CalendarComponent.prototype.eventClick = function (row) {
        var _this = this;
        var calendarData = {
            id: row.event.id,
            title: row.event.title,
            category: row.event.groupId,
            startDate: row.event.start,
            endDate: row.event.end,
            details: row.event.extendedProps['details']
        };
        var tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        var dialogRef = this.dialog.open(form_dialog_component_1.FormDialogComponent, {
            data: {
                calendar: calendarData,
                action: 'edit'
            },
            direction: tempDirection
        });
        this.subs.sink = dialogRef.afterClosed().subscribe(function (result) {
            var _a, _b;
            if (result === 'submit') {
                _this.calendarData = _this.calendarService.getDialogData();
                (_a = _this.calendarEvents) === null || _a === void 0 ? void 0 : _a.forEach(function (element, index) {
                    if (_this.calendarData.id === element.id) {
                        _this.editEvent(index, _this.calendarData);
                    }
                }, _this);
                _this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
                _this.addCusForm.reset();
            }
            else if (result === 'delete') {
                _this.calendarData = _this.calendarService.getDialogData();
                (_b = _this.calendarEvents) === null || _b === void 0 ? void 0 : _b.forEach(function (element) {
                    if (_this.calendarData.id === element.id) {
                        row.event.remove();
                    }
                }, _this);
                _this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
            }
        });
    };
    CalendarComponent.prototype.editEvent = function (eventIndex, calendarData) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var calendarEvents = this.calendarEvents.slice();
        var singleEvent = Object.assign({}, calendarEvents[eventIndex]);
        singleEvent.id = calendarData.id;
        singleEvent.title = calendarData.title;
        singleEvent.start = calendarData.startDate;
        singleEvent.end = calendarData.endDate;
        singleEvent.className = this.getClassNameValue(calendarData.category);
        singleEvent.groupId = calendarData.category;
        singleEvent['details'] = calendarData.details;
        calendarEvents[eventIndex] = singleEvent;
        this.calendarEvents = calendarEvents; // reassign the array
        this.calendarOptions.events = calendarEvents;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    CalendarComponent.prototype.handleEvents = function (events) {
        // this.currentEvents = events;
    };
    CalendarComponent.prototype.createCalendarForm = function (calendar) {
        return this.fb.group({
            id: [calendar.id],
            title: [
                calendar.title,
                [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ],
            category: [calendar.category],
            startDate: [calendar.startDate, [forms_1.Validators.required]],
            endDate: [calendar.endDate, [forms_1.Validators.required]],
            details: [
                calendar.details,
                [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ]
        });
    };
    CalendarComponent.prototype.showNotification = function (colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    };
    CalendarComponent.prototype.getClassNameValue = function (category) {
        var className;
        if (category === 'work')
            className = 'fc-event-success';
        else if (category === 'personal')
            className = 'fc-event-warning';
        else if (category === 'important')
            className = 'fc-event-primary';
        else if (category === 'travel')
            className = 'fc-event-danger';
        else if (category === 'friends')
            className = 'fc-event-info';
        return className;
    };
    tslib_1.__decorate([
        core_1.ViewChild('calendar', { static: false })
    ], CalendarComponent.prototype, "calendar");
    CalendarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-calendar',
            templateUrl: './calendar.component.html',
            styleUrls: ['./calendar.component.scss']
        })
    ], CalendarComponent);
    return CalendarComponent;
}(UnsubscribeOnDestroyAdapter_1.UnsubscribeOnDestroyAdapter));
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map