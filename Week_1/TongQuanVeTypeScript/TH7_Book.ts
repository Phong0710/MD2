export class TH7_Book {
    private _id: string;
    private _name:string;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    getid(): string {
        return this._id;
    }
    getname(): string {
        return this._name;
    }

    setname(value: string):void {
        this._name = value;
    }
}