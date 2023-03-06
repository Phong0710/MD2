import {AlbumManage} from "./manager/albumManage";
import {Album} from "./class/Album";
import chalk = require("chalk");
import {Song} from "./class/Song";
import {SongManage} from "./manager/songManage";


let input = require('readline-sync');
let albumManager1 = new AlbumManage()
let songsManage1 = new SongManage()


function showMenu() {
    let choice = -1;
    do {
        console.log(chalk.cyan(
            `
            ----------Menu Album---------
            1. Add new album
            2. Show all album
            3. Edit album name
            4. Delete album
            5. Search song title in all albums
            0. Exit
            `
        ))
        choice = +input.question("Enter number : ")
        switch (choice) {
            case 1:
                addAlbum();
                break;
            case 2:
                showMenuAlbum();
                break;
            case 3:
                editAlbum();
                break;
            case 4:
                delAlbum()
                break;
            case 5:
                findSongInAllAlbum()
                break;
        }

    }
    while (choice !== 0)
}

function addAlbum() {
    console.log('----- Add album ------')
    let id: number = albumManager1.getIDAlbum();
    let name: string = input.question('Enter Name: ');
    let status: boolean = input.question('Enter status: ')
    let albums: Album = new Album(id, name, status);
    albumManager1.add(albums)
    console.log(' Congratulate !');
}

function showMenuAlbum() {
    console.log(`
     —-------- Menu Album —-------
    `)
    let album = albumManager1.getAlbums();
    let menu = ''
    for (let i = 0; i < album.length; i++) {
        menu += `${i + 1}. Album ${album[i].nameAlbum}\n`
    }
    menu += '0. Exit'
    console.table(menu);
    let choice = +input.question('Enter choice : ');
    if (choice === 0) {
        showMenu();
    } else {
        let albumChoice = album[choice - 1];
        menuSonginAlbum(albumChoice);
    }

}

function editAlbum() {
    console.table(albumManager1.show())
    console.log("-----Update name Album-----")
    let name = input.question("Input Name: ")
    let aNumber = albumManager1.findByNameAndPrintAndReturnNumber(name)
    if (aNumber == 0) {
        console.log("Not found any albums having that name")
    } else {
        let id = +input.question("Choose ID to edit: ")
        let index = albumManager1.findById(id);
        albumManager1.albums[index].nameAlbum = input.question("Enter a new name to edit: ");
        console.table(albumManager1.show())
    }
}


function delAlbum() {
    console.table(albumManager1.show())

    console.log('-----Delete album----- ')
    let id = input.question(" Input album ID to DELETE: ")
    albumManager1.remove(id);
    console.table(albumManager1.show())

}

function findSongInAllAlbum() {

}

function menuSonginAlbum(album: Album) {
    console.log(album)
    let choice = -1;
    do {
        console.log(chalk.redBright(`
    ------ Menu Songs in Album ${album.nameAlbum}------
    1. Add new Song
    2. Edit song title
    3. Delete Song
    4. Show all song
    5. Find the song title in the album
    6. Comeback
    0. Menu Album
   
    `))
        choice = +input.question(" Enter choice : ")
        switch (choice) {
            case 1:
                addSong(album)
                break;
            case 2:
                editSong(album)
                break;
            case 3:
                deleteSong(album)
                break;
            case 4:
                showSongInAlbum(album)
                break
            case 5:
                findSongInAlbum()
                break
            case 6:
                showMenuAlbum()
                break
        }
    }
    while (choice !== 0);
}

function addSong(album: Album) {
    console.log(`--------Add Song------`)

    let id:number = songsManage1.getIDSong()
    let namesong:string = input.question("Enter name: ")
    let status: boolean = input.question("Enter status: ")
    let newSong = new Song(id, namesong, status)

    songsManage1.add(newSong);
    album.addSong(newSong)

    console.log(` ---- Congratulate !-----`)

}

function editSong(album:Album) {
    console.log("-----Update name Song-----")
    let name = input.question("Input name : ")
    let findName = songsManage1.findByNameAndPrintAndReturnNumber(name)
    if(findName==0){
        console.log("Not found any songs having that name")
    } else {
        let id = +input.question("Choose ID to edit: ")
        let index =songsManage1.findByIdSongs(id)
        songsManage1.songs[index].nameSong= input.question("Enter a new name to edit: ")
        console.table(album.getSongInAlbum())
    }
}

function deleteSong(album:Album) {
    console.table(album.getSongInAlbum())
    console.log("-----Delete songs-----")
    let id = +input.question("Enter the ID you want to delete: ")
    songsManage1.remove(id)
    album.remove(id)
    console.log("----You have successfully Deleted !!!!!")

}

function showSongInAlbum(album: Album) {
    console.log(album.getSongInAlbum())

}

function findSongInAlbum() {

}

showMenu()