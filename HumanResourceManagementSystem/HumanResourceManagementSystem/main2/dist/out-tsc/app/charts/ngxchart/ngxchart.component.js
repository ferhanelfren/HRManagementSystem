"use strict";
exports.__esModule = true;
exports.NgxchartComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var shape = require("d3-shape");
// import { Color, ScaleType } from '@swimlane/ngx-charts';
// import { LegendPosition } from '@swimlane/ngx-charts';
var NgxchartComponent = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function NgxchartComponent() {
        // common options for all charts
        // view: any[] = [1000, 400];
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        //public legendPosition: LegendPosition = LegendPosition.Right;
        this.timeline = true;
        // colorScheme: Color = {
        //   domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
        //   group: ScaleType.Ordinal,
        //   selectable: true,
        //   name: 'Customer Usage',
        // };
        this.showLabels = true;
        // data goes here
        this.single = [
            {
                name: 'China',
                value: 2243772
            },
            {
                name: 'USA',
                value: 1826000
            },
            {
                name: 'India',
                value: 1173657
            },
            {
                name: 'Japan',
                value: 857363
            },
            {
                name: 'Germany',
                value: 496750
            },
            {
                name: 'France',
                value: 204617
            },
        ];
        // line chart start
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '2010',
                        value: 7300000
                    },
                    {
                        name: '2011',
                        value: 5840000
                    },
                    {
                        name: '2012',
                        value: 7580000
                    },
                    {
                        name: '2013',
                        value: 7920000
                    },
                ]
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '2010',
                        value: 5470000
                    },
                    {
                        name: '2011',
                        value: 9270000
                    },
                    {
                        name: '2012',
                        value: 5280000
                    },
                    {
                        name: '2013',
                        value: 8580000
                    },
                ]
            },
            {
                name: 'France',
                series: [
                    {
                        name: '2010',
                        value: 5000002
                    },
                    {
                        name: '2011',
                        value: 5800000
                    },
                    {
                        name: '2012',
                        value: 4580000
                    },
                    {
                        name: '2013',
                        value: 7920000
                    },
                ]
            },
        ];
        // vaericle bar chart start
        this.vbarxAxisLabel = 'Country';
        this.vbaryAxisLabel = 'Sales';
        // horizontal bar chart start
        this.hbarxAxisLabel = 'Sales';
        this.hbaryAxisLabel = 'Country';
        this.autoScale = true;
        this.linexAxisLabel = 'Year';
        this.lineyAxisLabel = 'Sales';
        // area chart
        this.areaxAxisLabel = 'Year';
        this.areayAxisLabel = 'Sales';
        this.shapeChartCurve = shape.curveBasis;
        // constructor
    }
    NgxchartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-ngxchart',
            templateUrl: './ngxchart.component.html',
            styleUrls: ['./ngxchart.component.scss']
        })
    ], NgxchartComponent);
    return NgxchartComponent;
}());
exports.NgxchartComponent = NgxchartComponent;
//# sourceMappingURL=ngxchart.component.js.map