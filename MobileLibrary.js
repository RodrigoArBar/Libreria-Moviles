"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculator();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setName = function (newName) {
        this.name = newName;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setLocation = function (newLocation) {
        this.location = newLocation;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setMobiles = function (newMobiles) {
        this.mobiles = newMobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setTotalPrice = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculator = function () {
        var totalPrice = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            totalPrice += this.mobiles[i].getPrice();
        }
        return totalPrice;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This is all my mobiles.");
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log("\n");
            this.mobiles[i].print();
        }
        console.log("\n · Price overall: " + this.getTotalPrice());
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
