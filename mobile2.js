"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile() {
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setSdSize = function (newSdSize) {
        this.sdSize = newSdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setIs5G = function (newIs5G) {
        this.is5G = newIs5G;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNumber = function (newCameraNumber) {
        this.cameraNumber = newCameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.print = function () {
        console.log("The caracteristics of the mobile " + this.name + " are: ");
        console.log("\n · Name: " + this.name);
        console.log("\n · Model: " + this.model);
        console.log("\n · Trademark: " + this.trademark);
        console.log("\n · SD Size(GB): " + this.sdSize);
        console.log("\n · Color: " + this.color);
        console.log("\n · is5G?: " + this.color);
        console.log("\n · Number of Cameras: " + this.cameraNumber);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
