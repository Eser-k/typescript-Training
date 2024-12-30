import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(3,3);

let myCircle = new Circle(0,0,4)

let myRectangle = new Rectangle(0,0,5,3);

let shapes: Shape[] = [];

shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);


for(let tempShape of shapes){
    console.log(tempShape.getInfo());
}

