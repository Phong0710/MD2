export class Song {
    private _idSong:number
    private _nameSong:string;
    private _statusSong:boolean;


    constructor(idSong: number, nameSong: string, statusSong: boolean) {
        this._idSong = idSong;
        this._nameSong = nameSong;
        this._statusSong = statusSong;
    }

    get idSong(): number {
        return this._idSong;
    }

    set idSong(value: number) {
        this._idSong = value;
    }

    get nameSong(): string {
        return this._nameSong;
    }

    set nameSong(value: string) {
        this._nameSong = value;
    }

    get statusSong(): boolean {
        return this._statusSong;
    }

    set statusSong(value: boolean) {
        this._statusSong = value;
    }
}