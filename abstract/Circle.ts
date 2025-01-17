import {Shape} from './Shape';

export class Circle extends Shape{
    
    constructor(x:number,y:number, private _radius : number){
        super(x,y);
    }

    public get radius():number{
        return this._radius;
    }

    public set radius(value:number){
        this._radius = value;
    }

    getInfo():string{
        return `Circle: x=${this.x}, y=${this.y}, radius=${this.radius}`;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius,2);
    }
}