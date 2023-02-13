class Point {
    private x:number;
    private y:number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    displayName = "Point";
    distance(b:Point) {
        const dx = this.x - b.x;
        const dy= this.y - b.y;
        return Math.hypot(dx,dy);
    }
}
let p1 = new Point(5,5);
let p2 = new Point(10,10);
console.log(p1.displayName);
console.log(p1.distance(p2));