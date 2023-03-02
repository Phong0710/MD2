import {Imanager} from "./interface";
import {Song} from "../class/Song";

class ManageSong implements Imanager<Song>{
    songs:Song[]=[]
    constructor() {
    }

    add(t: Song): void {
        this.songs.push(t)
    }

    edit(name: string): void {
    }

    find(name: string): void {
    }

    remove(name: string): void {
    }

    show(): Song[] {
        return this.songs
    }

}