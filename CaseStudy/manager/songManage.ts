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

    findByNameAndPrintAndReturnNumber(name: string):void{
        let arrSong: Song[] = this.songs;
        let result: Song[] = arrSong.filter(element => element.nameSong.includes(name));
        if (result.length === 0) {
            console.log('Eror - Khong tim thay bai hat nao co cung ten');
        } else {
            console.table(result);
        }
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