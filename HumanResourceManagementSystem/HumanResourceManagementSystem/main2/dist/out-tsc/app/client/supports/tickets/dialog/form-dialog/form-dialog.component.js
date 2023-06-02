"use strict";
exports.__esModule = true;
exports.FormDialogComponent = void 0;
var tslib_1 = require("tslib");
var dialog_1 = require("@angular/material/dialog");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var tickets_model_1 = require("../../tickets.model");
var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(dialogRef, data, ticketsService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ticketsService = ticketsService;
        this.fb = fb;
        this.formControl = new forms_1.UntypedFormControl('', [
            forms_1.Validators.required,
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.ticket.ticket_id;
            this.ticket = data.ticket;
        }
        else {
            this.dialogTitle = 'New Ticket';
            var blankObject = {};
            this.ticket = new tickets_model_1.Tickets(blankObject);
        }
        this.ticketForm = this.createContactForm();
    }
    FormDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    };
    FormDialogComponent.prototype.createContactForm = function () {
        return this.fb.group({
            id: [this.ticket.id],
            ticket_id: [this.ticket.ticket_id],
            createdBy: [this.ticket.createdBy],
            subject: [this.ticket.subject],
            status: [this.ticket.status],
            assignTo: [this.ticket.assignTo],
            date: [this.ticket.date],
            details: [this.ticket.details]
        });
    };
    FormDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    FormDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FormDialogComponent.prototype.confirmAdd = function () {
        this.ticketsService.addTicket(this.ticketForm.getRawValue());
    };
    FormDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-form-dialog',
            templateUrl: './form-dialog.component.html',
            styleUrls: ['./form-dialog.component.scss']
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], FormDialogComponent);
    return FormDialogComponent;
}());
exports.FormDialogComponent = FormDialogComponent;
//# sourceMappingURL=form-dialog.component.js.map