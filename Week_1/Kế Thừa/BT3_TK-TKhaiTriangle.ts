class Shape {
    private _color: string;
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

    toString(): string {
        if (this._filled === true) {
            return `A Shape with color of ${this._color} and filled.`
        }else{
            return `A Shape with color of ${this._color} and not filled.`
        }
    }
}
class Triangle extends Shape{
    private _slide1: number;
    private _slide2: number;
    private _slide3: number;

    constructor(color: string, filled: boolean, slide1: number = 3, slide2: number = 4, slide3: number = 6) {
        super(color, filled);
        this._slide1 = slide1;
        this._slide2 = slide2;
        this._slide3 = slide3;
    }

    check():any{
        if(this._slide1 + this._slide2 > this._slide3 && this._slide1 + this._slide3 > this._slide2 && this._slide2 + this._slide3 > this._slide1) {
            return "Triangle";
        }
    }

    get slide1(): number {
        return this._slide1;
    }

    get slide2(): number {
        return this._slide2;
    }

    get slide3(): number {
        return this._slide3;
    }

    getPerimeter(): number {
        if(this.check() === "Triangle") {
            return this._slide1 + this._slide2 + this._slide3;
        } else {
            return 0;
        }
    }

    getArea(): number {
        if(this.check() === 'Triangle') {
            let p = this.getPerimeter() / 2;
            return Math.sqrt(p * (p - this._slide1) * (p - this._slide2) * (p - this._slide3));
        } else {
            return 0;
        }
    }
}
let triangle1 = new Triangle("red", true)
console.log(triangle1.getPerimeter());
console.log(triangle1.getArea());
