class Circle {
    private _radius: number;
    private _color: string

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    getArea(a: number): number {
        return Math.PI * Math.pow(a, 2);
    }
}

let circle = new Circle(15, "red")
console.log(circle.getArea(circle.radius))

class Cylinder extends Circle {
    private _width : number;

    constructor(radius: number, color: string, width: number) {
        super(radius, color);
        this._width = width;
    }
    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }
    getArea(a: number): number {
        return super.getArea(a)*this.width;
    }
}
let cylinder = new Cylinder(14,"red",5)
console.log(cylinder.getArea(cylinder.width))