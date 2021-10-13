"use strict";
exports.__esModule = true;
var mobile2_1 = require("./mobile2");
var movil1 = new mobile2_1.Mobile;
movil1.setName("Nokia3210");
var movil2 = new mobile2_1.Mobile;
movil2.setName("iPhone3G");
var movil3 = new mobile2_1.Mobile;
movil3.setName("Samsung Galaxy 10");
movil1.print();
movil2.print();
movil3.print();
movil1.setCameraNumber(4);
movil1.setIs5G(true);
movil1.print();
movil2.print();
movil3.print();
