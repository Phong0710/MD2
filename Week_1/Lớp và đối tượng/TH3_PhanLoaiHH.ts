class Shape {
    private color: string;
    private filled: boolean

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
}

let shape = new Shape('red', false);
console.log(shape)

class Circle {
    private color: string
    private filled: boolean
    private radius: number

    constructor(color: string, filled: boolean, radius: number) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea() {
        return Math.PI * (this.radius * this.radius);
    }

    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
}

let circle = new Circle("blue", false, 14);
console.log(circle);

class Rectangle {
    private width: number
    private length: number
    private color: string
    private filled: boolean

    constructor(width: number,
                length: number,
                color: string,
                filled: boolean) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }

    getArea() {
        return this.width * this.length;
    }

    getPerimeter() {
        return 2 * (this.width + this.length);
    }
}

let rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);

class Square {
    private color: string;
    private filled: boolean;
    private side: number;

    constructor(color: string,
                filled: boolean,
                side = 1) {
        this.color = color;
        this.filled = filled;
        this.side = side
    }
}

let square = new Square("yellow", true, 5.8);
console.log(square);