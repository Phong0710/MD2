class Shape{
    color;
    filled;
    constructor(color,filled) {
        this.color=color;
        this.filled=filled;
    }
}
let shape = new Shape('red',false);
console.log(shape)
class Circle{
    color;
    filled;
    radius;
    constructor(color,filled,radius) {
        this.color=color;
        this.filled=filled;
        this.radius=radius;
    }
    getArea(){
        return Math.PI*(this.radius*this.radiuss);
    }
    getPerimeter(){
        return 2*this.radius*Math.PI;
    }
}
let circle = new Circle(4, "indigo", false);
console.log(circle);
class Rectangle {
    width ;
    length ;
    color;
    filled;
    constructor(width ,
                length ,
                color,
                filled) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }

    getArea()  {
        return this.width * this.length;
    }

    getPerimeter()  {
        return 2 * (this.width + this.length);
    }
}
let rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);
class Square {
    color;
    filled
    side ;
    constructor(color,
                filled,
                side ) {
        this.color = color;
        this.filled = filled;
        this.side = side
    }
}
let square = new Square("yellow", true, 5.8);
console.log(square);