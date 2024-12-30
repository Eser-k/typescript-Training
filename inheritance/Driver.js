"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(3, 3);
var myCircle = new Circle_1.Circle(0, 0, 4);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 5, 3);
console.log(myShape.getInfo());
console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());