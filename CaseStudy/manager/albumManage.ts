import {Imanager} from "./interface";
import {Album} from "../class/Album";


export class albumManager implements Imanager<Album> {
    albums: Array<Album> = []
   countAlbum: number = 1;

    constructor() {
    }

    add(t: Album): void {
        this.albums.push(t)
    }
    getAlbums(): Album[]{
        return this.albums
    }


    findByNameAndPrintAndReturnNumber(name: string): number {
        let nameAlbum = this.albums.filter((item) => {
                if (item.nameAlbum === name) {
                    return true
                }
            }
        )
        console.table(nameAlbum);
        return nameAlbum.length;
    }

    findById(id: number): number {
        return this.albums.findIndex(function (item) {
            return item.idAlbum == id;
        })
    }


    show(): Array<Album> {
        return this.albums
    }

    edit(name: string, id:number): void {
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
// let arr = new albumManager()
// let album1 = new Album(1,"qqqq",true)
// let album2 = new Album(2,"wwww",true)
// let album3 = new Album(3,"eeee",false)
// arr.add(album1)
// arr.add(album2)
// arr.add(album3)
// console.table(arr.show())
// arr.find("wwww")
// arr.remove(2)
// console.table(arr.show())
