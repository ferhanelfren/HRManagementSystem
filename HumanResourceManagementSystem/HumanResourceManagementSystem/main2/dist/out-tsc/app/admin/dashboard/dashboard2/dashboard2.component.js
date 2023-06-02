"use strict";
exports.__esModule = true;
exports.Dashboard2Component = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Dashboard2Component = /** @class */ (function () {
    //  color: ["#3FA7DC", "#F6A025", "#9BC311"],
    function Dashboard2Component() {
        // controller code
    }
    Dashboard2Component.prototype.ngOnInit = function () {
        this.chart1();
        this.chart2();
    };
    Dashboard2Component.prototype.chart1 = function () {
        this.lineChartOptions = {
            series: [
                {
                    name: 'Employee 1',
                    data: [70, 200, 80, 180, 170, 105, 210]
                },
                {
                    name: 'Employee 2',
                    data: [80, 250, 30, 120, 260, 100, 180]
                },
                {
                    name: 'Employee 3',
                    data: [85, 130, 85, 225, 80, 190, 120]
                },
            ],
            chart: {
                height: 350,
                type: 'line',
                foreColor: '#9aa0ac',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#A5A5A5', '#875692', '#4CB5AC'],
            stroke: {
                curve: 'smooth'
            },
            grid: {
                show: true,
                borderColor: '#9aa0ac',
                strokeDashArray: 1
            },
            markers: {
                size: 3
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Month'
                }
            },
            yaxis: {
                // opposite: true,
                title: {
                    text: 'Clients'
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            },
            tooltip: {
                theme: 'dark',
                marker: {
                    show: true
                },
                x: {
                    show: true
                }
            }
        };
    };
    Dashboard2Component.prototype.chart2 = function () {
        this.pieChartOptions = {
            series2: [44, 55, 13, 43, 22],
            chart: {
                type: 'donut',
                width: 225
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            labels: ['Science', 'Mathes', 'Economics', 'History', 'Music'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {}
                },
            ]
        };
    };
    Dashboard2Component = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dashboard2',
            templateUrl: './dashboard2.component.html',
            styleUrls: ['./dashboard2.component.scss']
        })
    ], Dashboard2Component);
    return Dashboard2Component;
}());
exports.Dashboard2Component = Dashboard2Component;
//# sourceMappingURL=dashboard2.component.js.map