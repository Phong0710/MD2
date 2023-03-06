import {Song} from "./Song";

export class Album {
    private _idAlbum: number
    private _nameAlbum: string;
    private _statusAlbum: boolean;
    private songInAlbum:Song[]=[]


    constructor(idAlbum: number, nameAlbum: string, statusAlbum: boolean) {
        this._idAlbum = idAlbum;
        this._nameAlbum = nameAlbum;
        this._statusAlbum = statusAlbum;
    }
    addSong(song: Song) {
        this.songInAlbum.push(song);
    }
    getSongInAlbum():Array<Song>{
        return this.songInAlbum
    }
    findByIdSongInAlbum(id:number){
        return this.songInAlbum.findIndex((item)=>{
            return item.idSong==id
        })
    }
    remove(id:number):void{
         let index = this.findByIdSongInAlbum(id)
        this.songInAlbum.splice(index,1)
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