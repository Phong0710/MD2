class Circle {
    private r: number

    //public r:number
    constructor(r: number) {
        this.r = r;
    }

    getR(): number {
        return this.r;
    }

    khoangcach(X: Circle, Y: Circle): number {
        let kc = Math.pow(X.r, 2) + Math.pow(Y.r, 2)
        return Math.sqrt(kc);
    }
}

let OH = new Circle(9);
let RZ = new Circle(5);
let HZ = new Circle(24)
let OD = new Circle(Math.abs(OH.getR() - RZ.getR()));
console.log(HZ.khoangcach(HZ, OD))
