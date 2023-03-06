import {Imanager} from "./interface";
import {Song} from "../class/Song";

export class SongManage implements Imanager<Song>{
    songs:Song[]=[]
    count:number=1;
    constructor() {
    }
    getIDSong(){
        return this.count++
    }

    add(t: Song): void {
        this.songs.push(t)
    }

    edit(name: string): void {
    }


    show(): Song[] {
        return this.songs
    }

    findByNameAndPrintAndReturnNumber(name: string): number {
        let nameSong = this.songs.filter((item)=>{
            if(item.nameSong===name)
                return true
        })
        console.table(nameSong)
        return nameSong.length
    }
    findByIdSongs(id:number):number{
        return this.songs.findIndex((item)=>{
            return item.idSong== id
        })
    }

    remove(id: number): void {
        let index = this.findByIdSongs(id)
        this.songs.splice(index,1)
    }


}