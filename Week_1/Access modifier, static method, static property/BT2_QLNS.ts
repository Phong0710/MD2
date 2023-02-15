export class Employee {
    private _Ho: string;
    private _Ten: string;
    private _NgaySinh: string;
    private _DiaChi: string;
    private _ViTri: string;

    constructor(Ho: string, Ten: string, NgaySinh: string, DiaChi: string, ViTri: string) {
        this._Ho = Ho;
        this._Ten = Ten;
        this._NgaySinh = NgaySinh;
        this._DiaChi = DiaChi;
        this._ViTri = ViTri;
    }

    get Ho(): string {
        return this._Ho;
    }

    set Ho(value: string) {
        this._Ho = value;
    }

    get Ten(): string {
        return this._Ten;
    }

    set Ten(value: string) {
        this._Ten = value;
    }

    get NgaySinh(): string {
        return this._NgaySinh;
    }

    set NgaySinh(value: string) {
        this._NgaySinh = value;
    }

    get DiaChi(): string {
        return this._DiaChi;
    }

    set DiaChi(value: string) {
        this._DiaChi = value;
    }

    get ViTri(): string {
        return this._ViTri;
    }

    set ViTri(value: string) {
        this._ViTri = value;
    }
    getInfo(){
        return this;
    }
}