export class MyLove {
    private _id:number;
    private _nameMyLove:string;
    private _zodiac :string
    private _homeTown:string;
    private _yearOfBirth:number
    private _hobby:string

    constructor(id: number, nameMyLove: string, zodiac: string, homeTown: string, yearOfBirth: number, hobby: string) {
        this._id = id;
        this._nameMyLove = nameMyLove;
        this._zodiac = zodiac;
        this._homeTown = homeTown;
        this._yearOfBirth = yearOfBirth;
        this._hobby = hobby;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameMyLove(): string {
        return this._nameMyLove;
    }

    set nameMyLove(value: string) {
        this._nameMyLove = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get homeTown(): string {
        return this._homeTown;
    }

    set homeTown(value: string) {
        this._homeTown = value;
    }

    get yearOfBirth(): number {
        return this._yearOfBirth;
    }

    set yearOfBirth(value: number) {
        this._yearOfBirth = value;
    }

    get hobby(): string {
        return this._hobby;
    }

    set hobby(value: string) {
        this._hobby = value;
    }
}