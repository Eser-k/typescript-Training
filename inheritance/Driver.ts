import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(3,3);

let myCircle = new Circle(0,0,4)

let myRectangle = new Rectangle(0,0,5,3);

console.log(myShape.getInfo());

console.log(myCircle.getInfo());

console.log(myRectangle.getInfo());

