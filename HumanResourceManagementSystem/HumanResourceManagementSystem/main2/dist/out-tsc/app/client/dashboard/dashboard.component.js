"use strict";
exports.__esModule = true;
exports.DashboardComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        // code here
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.chart1();
        this.chart2();
        this.chart3();
        this.chart4();
    };
    DashboardComponent.prototype.chart1 = function () {
        this.areaChartOptions = {
            series: [
                {
                    name: 'New Clients',
                    data: [31, 40, 28, 51, 42, 85, 77]
                },
                {
                    name: 'Old Clients',
                    data: [11, 32, 45, 32, 34, 52, 41]
                },
            ],
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false
                },
                foreColor: '#9aa0ac'
            },
            colors: ['#7D4988', '#66BB6A'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z',
                ]
            },
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
                offsetX: 0,
                offsetY: 0
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            }
        };
    };
    DashboardComponent.prototype.chart2 = function () {
        this.radialChartOptions = {
            series: [44, 55, 67],
            chart: {
                height: 265,
                type: 'radialBar'
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px'
                        },
                        value: {
                            fontSize: '16px'
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function () {
                                return '249';
                            }
                        }
                    }
                }
            },
            colors: ['#ffc107', '#3f51b5', '#8bc34a'],
            labels: ['Face TO Face', 'E-Consult', 'Available']
        };
    };
    DashboardComponent.prototype.chart3 = function () {
        this.restRateChartOptions = {
            series: [
                {
                    name: 'Hours',
                    data: [69, 75, 72, 69, 75, 66, 80]
                },
            ],
            chart: {
                height: 365,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                foreColor: '#9aa0ac',
                toolbar: {
                    show: false
                }
            },
            colors: ['#6777EF'],
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            markers: {
                size: 1
            },
            grid: {
                show: true,
                borderColor: '#9aa0ac',
                strokeDashArray: 1
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Months'
                }
            },
            yaxis: {
                title: {
                    text: 'Hours'
                }
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
    DashboardComponent.prototype.chart4 = function () {
        this.performanceRateChartOptions = {
            series: [
                {
                    name: 'Hours',
                    data: [113, 120, 130, 120, 125, 119, 126]
                },
            ],
            chart: {
                height: 365,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                foreColor: '#9aa0ac',
                toolbar: {
                    show: false
                }
            },
            colors: ['#976DA0'],
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            markers: {
                size: 1
            },
            grid: {
                show: true,
                borderColor: '#9aa0ac',
                strokeDashArray: 1
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Months'
                }
            },
            yaxis: {
                title: {
                    text: 'Hours'
                }
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
    tslib_1.__decorate([
        core_1.ViewChild('chart')
    ], DashboardComponent.prototype, "chart");
    DashboardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map