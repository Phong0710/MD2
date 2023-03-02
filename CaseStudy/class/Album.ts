export class Album {
    private _idAlbum: number
    private _nameAlbum: string;
    private _statusAlbum: boolean;


    constructor(idAlbum: number, nameAlbum: string, statusAlbum: boolean) {
        this._idAlbum = idAlbum;
        this._nameAlbum = nameAlbum;
        this._statusAlbum = statusAlbum;
    }

    get idAlbum(): number {
        return this._idAlbum;
    }

    set idAlbum(value: number) {
        this._idAlbum = value;
    }

    get nameAlbum(): string {
        return this._nameAlbum;
    }

    set nameAlbum(value: string) {
        this._nameAlbum = value;
    }

    get statusAlbum(): boolean {
        return this._statusAlbum;
    }

    set statusAlbum(value: boolean) {
        this._statusAlbum = value;
    }
}