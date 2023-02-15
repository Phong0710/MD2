class Shape {
    private _color : string;
    private _filled: boolean;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get filled(): boolean {
        return this._filled;
    }

    set filled(value: boolean) {
        this._filled = value;
    }
    getInfo():string{
        if(this.filled===true){
            return `A Shape with color of ${this.filled} and filled`
        }else {
            return `A Shape with color of ${this.filled} and not filled`
        }
    }
}
class Circle extends Shape {
    private _radius:number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

     get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }
    getArea(a:number):number{
        return Math.PI*Math.pow(a,2)
    }
    getPerimeter(a:number):number{
        return Math.PI*2*a;
    }
    getInfo(): string {
        return `A Circle with radius = ${this.radius}, which is a subclass of ${super.getInfo()}` ;
    }
}
let a= new Circle("red",true,10);
let b= new Circle("red",false,10);
console.log(a.getInfo())
console.log(b.getInfo())

class Rectangle extends Shape{
    private _width:number;
    private _length:number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
    getArea(a:number,b:number):number{
        return a*b
    }
    getPerimeter(a:number,b:number):number{
        return (a+b)*2
    }
    getInfo(): string {
        return `A Rectangle with width = ${this.width} and length = ${this.length}, which is a subclass of ${super.getInfo()}` ;
    }
}
let c = new Rectangle("red",true,5,4);
let d = new Rectangle("red",false,5,4);
console.log(c.getInfo())
console.log(d.getInfo())

