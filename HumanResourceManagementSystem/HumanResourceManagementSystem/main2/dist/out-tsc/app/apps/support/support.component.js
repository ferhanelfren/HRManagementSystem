"use strict";
exports.__esModule = true;
exports.SupportComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
var ELEMENT_DATA = [
    {
        checked: false,
        imageUrl: 'assets/images/user/user1.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user2.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user3.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user4.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user5.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user6.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user7.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user8.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user9.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user10.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user1.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user2.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user3.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user4.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user5.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user6.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user7.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user8.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
    },
];
var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
        this.displayedColumns = [
            'checked',
            'imageUrl',
            'name',
            'email',
            'subject',
            'status',
            'assignTo',
            'date',
            'action',
        ];
        this.dataSource = new table_1.MatTableDataSource(ELEMENT_DATA);
        //constructor
    }
    SupportComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    tslib_1.__decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], SupportComponent.prototype, "paginator");
    SupportComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-support',
            templateUrl: './support.component.html',
            styleUrls: ['./support.component.scss']
        })
    ], SupportComponent);
    return SupportComponent;
}());
exports.SupportComponent = SupportComponent;
//# sourceMappingURL=support.component.js.map