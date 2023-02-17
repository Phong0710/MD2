interface Resizeable {
    resize():number
}

class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show(): string {
        return `I am a shape. My name is ${this.name}`;
    }
}

class Circle extends Shape implements Resizeable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }
    resize(): number {
        let phanTram = Math.random()*this.radius+this.radius
        return phanTram
    }
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculateArea2(): number {
        return Math.PI * Math.pow(this.resize(), 2)
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2
    }
    calculatePerimeter2(): number {
        return Math.PI * this.resize() * 2
    }


}

class Cylinder extends Circle {
    height: number;

    constructor(name: string,
                radius: number,
                height: number) {
        super(name, radius);
        this.height = height;
    }

    calculateArea(): number {
        return super.calculateArea() * 2 + super.calculatePerimeter() * this.height;
    }

    calculateVolume(): number {
        return super.calculateArea() * this.height;
    }
}

class Rectangle extends Shape implements Resizeable {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    resize(): number {
        return 0;
    }


}

class Square extends Rectangle {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
}

 let circle = new Circle("ht1",5)
console.log(circle.radius)
console.log(circle.calculateArea())
console.log(circle.calculatePerimeter())
console.log(circle.resize())
console.log(circle.calculateArea2())
console.log(circle.calculatePerimeter2())
