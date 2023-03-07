import {Imanager} from "./interface";
import {Album} from "../class/Album";



export class AlbumManage implements Imanager<Album> {
    albums: Array<Album> = []
    countAlbum: number = 1;

    constructor() {
    }


    add(t: Album): void {
        this.albums.push(t)
    }




    findByNameAndPrintAndReturnNumber(name: string): void {
        let arrSong: Album[] = this.albums;
        let result: Album[] = arrSong.filter(element => element.nameAlbum.includes(name));
        if (result.length === 0) {
            return console.log('Error - Couldn\'t find any songs with the same name !');
        } else {
            console.table(result);
        }
    }

    checkName(name: string): boolean {
        let arrSong: Album[] = this.albums;
        let result: Album[] = arrSong.filter(element => element.nameAlbum.includes(name));
        if (result.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    findById(id: number): number {
        return this.albums.findIndex(function (item) {
            return item.idAlbum == id;
        })
    }


    show(): Array<Album> {
        return this.albums
    }

    edit(name: string, id: number): void {
        let index = this.findById(id);
        this.albums[index].nameAlbum = name


    }

    getIDAlbum(): number {
        return this.countAlbum++;
    }

    remove(id: number): void {
        let index = this.findById(id);
        this.albums.splice(index, 1)
    }


}

