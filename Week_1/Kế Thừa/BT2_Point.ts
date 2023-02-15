import * as tty from "tty";

class Point2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    getXY(): object {
        return {
            x: this.x,
            y: this.y
        }
    }

    setXY(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}

let point2d = new Point2D(3, 5)
// console.log(typeof point2d.getXY())
console.log(point2d.getXY())

interface point3D {
    x: number,
    y: number,
    z?: number
}

class Point3D extends Point2D {
    private _z: number

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }

    getXYZ(): object {
        let XYZ: point3D = this.getXY() as point3D;
        XYZ.z = this.z;
        // return XYZ
        return XYZ;
    }


    setXYZ(x: number, y: number, z: number) {
        super.setXY(x, y),
            this.z = z;
    }
}

let a1 = new Point3D(12,14,16)
console.log(a1.getXYZ());