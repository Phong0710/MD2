class Shape {
    protected name:string;
    protected color:string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}
class Triagle extends Shape{
    private _AB:number;
    private _BC:number;
    private _AC:number;

    constructor(name: string, color: string, AB: number=3, BC: number=4, AC: number=6) {
        super(name, color);
        this._AB = AB;
        this._BC = BC;
        this._AC = AC;
    }

    get AB(): number {
        return this._AB;
    }

    get BC(): number {
        return this._BC;
    }

    get AC(): number {
        return this._AC;
    }
    getPerimeter(){
        return (this.AB+this.AC+this.BC)
    }
    P(){
        return this.getPerimeter()/2
    }
    getArea():number{
        return Math.sqrt(this.P()*(this.P()-this.AB)*(this.P()-this.BC)*(this.P()-this.AC))
    }

}
let a=new Triagle("Tam Giac 1","red")
console.log(a.getArea())