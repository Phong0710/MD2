class QuadraticEquation {
    private _a:number;
    private _b:number;
    private _c:number

    constructor(a: number, b: number, c: number) {
        this._a = a;
        this._b = b;
        this._c = c;
    }


    getA(): number {
        return this._a;
    }

    getB(): number {
        return this._b;
    }

    getC(): number {
        return this._c;
    }

    getDiscriminant(){
        return (this.getB()*2)-4*this.getA()*this.getC()
    }
    getRoot1():number{
        return -this.getB()+Math.pow(this.getDiscriminant(),0.5)/(2*this.getA());
    }
    getRoot2():number{
        return -this.getB()-Math.pow(this.getDiscriminant(),0.5)/(2*this.getA());
    }
    show(){
        if(this.getDiscriminant()>0){
            console.log(this.getRoot1())
            console.log(this.getRoot2())
        }else if(this.getDiscriminant()===0){
            console.log(this.getRoot1())
        }else {
            console.log(`The quation has no roots`)
        }
    }
}

let p1=new QuadraticEquation(1,3,1)
p1.show()