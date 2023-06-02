"use strict";
exports.__esModule = true;
exports.DialogsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var DialogsComponent = /** @class */ (function () {
    function DialogsComponent() {
        // constructor
    }
    DialogsComponent.prototype.showBasicMessage = function () {
        sweetalert2_1["default"].fire('Here is a message!');
    };
    DialogsComponent.prototype.showWithTitleMessage = function () {
        sweetalert2_1["default"].fire('The Internet?', 'That thing is still around?', 'question');
    };
    DialogsComponent.prototype.showTitleErorIcon = function () {
        sweetalert2_1["default"].fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    };
    DialogsComponent.prototype.showLongContent = function () {
        sweetalert2_1["default"].fire({
            imageUrl: 'https://placeholder.pics/svg/300x1500',
            imageHeight: 1500,
            imageAlt: 'A tall image'
        });
    };
    DialogsComponent.prototype.showCustomHtml = function () {
        sweetalert2_1["default"].fire({
            title: '<strong>HTML <u>example</u></strong>',
            icon: 'info',
            html: 'You can use <b>bold text</b>, ' +
                '<a href="//sweetalert2.github.io">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        });
    };
    DialogsComponent.prototype.showCustomPosition = function () {
        sweetalert2_1["default"].fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    };
    DialogsComponent.prototype.customWithFunction = function () {
        sweetalert2_1["default"].fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                sweetalert2_1["default"].fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };
    DialogsComponent.prototype.passParameter = function () {
        var swalWithBootstrapButtons = sweetalert2_1["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons
            .fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        })
            .then(function (result) {
            if (result.value) {
                swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === sweetalert2_1["default"].DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    DialogsComponent.prototype.rtlSupport = function () {
        sweetalert2_1["default"].fire({
            title: 'هل تريد الاستمرار؟',
            icon: 'question',
            iconHtml: '؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true
        });
    };
    DialogsComponent.prototype.ajaxRequest = function () {
        sweetalert2_1["default"].fire({
            title: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: function (login) {
                return fetch("//api.github.com/users/" + login)
                    .then(function (response) {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })["catch"](function (error) {
                    sweetalert2_1["default"].showValidationMessage("Request failed: " + error);
                });
            },
            allowOutsideClick: function () { return !sweetalert2_1["default"].isLoading(); }
        }).then(function (result) {
            if (result.value) {
                sweetalert2_1["default"].fire({
                    title: result.value.login + "'s avatar",
                    imageUrl: result.value.avatar_url
                });
            }
        });
    };
    DialogsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dialogs',
            templateUrl: './dialogs.component.html',
            styleUrls: ['./dialogs.component.scss']
        })
    ], DialogsComponent);
    return DialogsComponent;
}());
exports.DialogsComponent = DialogsComponent;
//# sourceMappingURL=dialogs.component.js.map