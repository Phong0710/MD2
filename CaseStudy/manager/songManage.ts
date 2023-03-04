import {Imanager} from "./interface";
import {Song} from "../class/Song";

export class SongManage implements Imanager<Song>{
    songs:Song[]=[]
    constructor() {
    }

    add(t: Song): void {
        this.songs.push(t)
    }

    edit(name: string): void {

    }


    show(): Song[] {
        return this.songs
    }

    findByNameAndPrintAndReturnNumber(name: string): void {
    }
    findByIdSongs(id:number):number{
        return this.songs.findIndex((item)=>{
            return item.idSong= id
        })
    }

    remove(id: number): void {
    }

}