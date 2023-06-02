"use strict";
exports.__esModule = true;
exports.GoogleComponent = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var google_maps_1 = require("@angular/google-maps");
var GoogleComponent = /** @class */ (function () {
    // bread crumb items
    function GoogleComponent() {
        this.center = {
            lat: 24,
            lng: 12
        };
        this.zoom = 4;
        // basic map end
        //add marker map start
        this.markerOptions = {
            draggable: false
        };
        this.markerPositions = [];
        this.markerPositions1 = [];
        // Google Map Info Window end
        // Polyline start
        this.center1 = {
            lat: 24,
            lng: 12
        };
        this.zoom1 = 3;
        this.vertices = [
            {
                lat: 13,
                lng: 13
            },
            {
                lat: -13,
                lng: 0
            },
            {
                lat: 13,
                lng: -13
            },
        ];
        // Polyline end
        // trafic layer start
        this.center2 = {
            lat: 24,
            lng: 12
        };
        this.zoom2 = 4;
        // constructor code
    }
    GoogleComponent.prototype.moveMap = function (event) {
        if (event.latLng != null)
            this.center = event.latLng.toJSON();
    };
    GoogleComponent.prototype.move = function (event) {
        if (event.latLng != null)
            this.display = event.latLng.toJSON();
    };
    GoogleComponent.prototype.addMarker = function (event) {
        if (event.latLng != null)
            this.markerPositions.push(event.latLng.toJSON());
    };
    GoogleComponent.prototype.addMarker1 = function (event) {
        if (event.latLng != null)
            this.markerPositions1.push(event.latLng.toJSON());
    };
    GoogleComponent.prototype.openInfoWindow = function (marker) {
        if (this.infoWindow != undefined)
            this.infoWindow.open(marker);
    };
    tslib_1.__decorate([
        core_1.ViewChild(google_maps_1.MapInfoWindow)
    ], GoogleComponent.prototype, "infoWindow");
    GoogleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-google',
            templateUrl: './google.component.html',
            styleUrls: ['./google.component.scss']
        })
    ], GoogleComponent);
    return GoogleComponent;
}());
exports.GoogleComponent = GoogleComponent;
//# sourceMappingURL=google.component.js.map