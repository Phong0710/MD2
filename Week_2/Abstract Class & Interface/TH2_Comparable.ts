class Circle {
    private _radius :number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }
    getInfo():string{
        return `A Circle with radius = ${this._radius}`
    }
}
interface Comparable {
    compareTo(o:object):string;
}
class ComparableCircle extends Circle implements Comparable{

    constructor(radius: number) {
        super(radius);
    }

    compareTo(o: ComparableCircle): string {
       if(this.radius>o.radius){
           return "The current circle is larger." ;
       } else if (this.radius<o.radius){
           return "The current circle is smaller.";
       } else {
           return "The current circle is larger."
       }
    }

}
let circle =[];
circle[0]=new ComparableCircle(15)
circle[2] = new ComparableCircle(11);
let result = circle[2].compareTo(circle[0])
console.log(result)