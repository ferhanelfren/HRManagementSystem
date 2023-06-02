"use strict";
exports.__esModule = true;
exports.ChartjsComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent() {
        // Line chert start
        this.lineChartData = {
            datasets: [
                {
                    label: 'Foods',
                    data: [0, 30, 10, 120, 50, 63, 10],
                    backgroundColor: 'transparent',
                    borderColor: '#222222',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.5,
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: '#222222'
                },
                {
                    label: 'Electronics',
                    data: [0, 50, 40, 80, 40, 79, 120],
                    backgroundColor: 'transparent',
                    borderColor: '#f96332',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.5,
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: '#f96332'
                },
            ],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        };
        this.lineChartOptions = {
            elements: {
                line: {
                    tension: 0.5
                }
            },
            scales: {
                y: {
                    position: 'left',
                    ticks: {
                        color: '#9aa0ac'
                    }
                },
                x: {
                    ticks: {
                        color: '#9aa0ac'
                    }
                }
            },
            plugins: {
                legend: { display: true }
            }
        };
        this.lineChartType = 'line';
        // Line chart end
        // Area chart start
        this.areaChartData = {
            datasets: [
                {
                    label: 'Foods',
                    data: [0, 105, 190, 140, 270],
                    borderWidth: 2,
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointBorderColor: 'transparent',
                    fill: 'origin'
                },
                {
                    label: 'Electronics',
                    data: [0, 152, 80, 250, 190],
                    borderWidth: 2,
                    pointStyle: 'circle',
                    pointRadius: 3,
                    pointBorderColor: 'transparent',
                    fill: 'origin'
                },
            ],
            labels: ['January', 'February', 'March', 'April', 'May']
        };
        this.areaChartOptions = {
            elements: {
                line: {
                    tension: 0.5
                }
            },
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                y: {
                    position: 'left',
                    ticks: {
                        color: '#9aa0ac'
                    }
                },
                x: {
                    ticks: {
                        color: '#9aa0ac'
                    }
                }
            },
            plugins: {
                legend: { display: true }
            }
        };
        this.areaChartType = 'line';
        // area chart end
        // bar chart start
        this.barChartOptions = {
            responsive: true,
            scales: {
                x: {
                    ticks: {
                        color: '#9aa0ac'
                    }
                },
                y: {
                    ticks: {
                        color: '#9aa0ac'
                    },
                    min: 10
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        };
        this.barChartType = 'bar';
        this.barChartPlugins = [];
        this.barChartData = {
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            datasets: [
                {
                    data: [65, 59, 80, 81, 56, 55, 40],
                    label: 'Series A',
                    backgroundColor: 'rgba(109, 144, 232, 0.8)'
                },
                {
                    data: [28, 48, 40, 19, 86, 27, 90],
                    label: 'Series B',
                    backgroundColor: 'rgba(255, 140, 96, 0.8)'
                },
            ]
        };
        // bar chart end
        // // start radar chart
        this.radarChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.radarChartLabels = [
            'A1',
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7',
        ];
        this.radarChartData = {
            labels: this.radarChartLabels,
            datasets: [
                {
                    data: [58, 60, 74, 78, 55, 64, 42],
                    label: 'Series A'
                },
                {
                    data: [30, 45, 51, 22, 79, 35, 82],
                    label: 'Series B'
                },
            ]
        };
        this.radarChartType = 'radar';
        // end radar chart
        // Doughnut chart start
        this.doughnutChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.doughnutChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail-Order Sales',
        ];
        this.doughnutChartData = {
            labels: this.doughnutChartLabels,
            datasets: [
                {
                    data: [350, 450, 100],
                    backgroundColor: ['#60A3F6', '#7C59E7', '#DD6811']
                },
                {
                    data: [50, 150, 120],
                    backgroundColor: ['#60A3F6', '#7C59E7', '#DD6811']
                },
                {
                    data: [250, 130, 70],
                    backgroundColor: ['#60A3F6', '#7C59E7', '#DD6811']
                },
            ]
        };
        this.doughnutChartType = 'doughnut';
        // Doughnut chart end
        // // Bubble chart start
        this.bubbleChartOptions = {
            responsive: true,
            scales: {
                x: {
                    ticks: {
                        color: '#9aa0ac'
                    }
                },
                y: {
                    ticks: {
                        color: '#9aa0ac'
                    }
                }
            }
        };
        this.bubbleChartType = 'bubble';
        this.bubbleChartLegend = true;
        this.bubbleChartData = {
            labels: [],
            datasets: [
                {
                    data: [
                        { x: 45, y: 150000, r: 22.22 },
                        { x: 42, y: 110000, r: 33.0 },
                        { x: 60, y: 80637, r: 15.22 },
                        { x: 75, y: 195055, r: 21.5 },
                        { x: 30, y: 160446, r: 35.67 },
                        { x: 25, y: 80446, r: 25.67 },
                        { x: 10, y: 228446, r: 30.32 },
                    ],
                    label: 'Series A'
                },
            ]
        };
        // // Bubble chart end
        // Polar chart start
        this.polarChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.polarAreaChartLabels = [
            'Project 1',
            'Project 2',
            'Project 3',
            'Project 4',
        ];
        this.polarAreaChartData = {
            labels: this.polarAreaChartLabels,
            datasets: [
                {
                    data: [15, 18, 9, 19],
                    label: 'Series 1',
                    backgroundColor: ['#60A3F6', '#7C59E7', '#DD6811', '#5BCFA5']
                },
            ]
        };
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // Polar chart end
        this.pieChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        };
        this.pieChartData = {
            labels: [['Download'], ['Store'], 'Mail'],
            datasets: [
                {
                    data: [300, 500, 100],
                    backgroundColor: ['#60A3F6', '#7C59E7', '#DD6811', '#5BCFA5']
                },
            ]
        };
        this.pieChartType = 'pie';
        // constructor code
    }
    ChartjsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-chartjs',
            templateUrl: './chartjs.component.html',
            styleUrls: ['./chartjs.component.scss']
        })
    ], ChartjsComponent);
    return ChartjsComponent;
}());
exports.ChartjsComponent = ChartjsComponent;
//# sourceMappingURL=chartjs.component.js.map