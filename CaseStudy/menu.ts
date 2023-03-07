import {AlbumManage} from "./manager/albumManage";
import {Album} from "./class/Album";
import chalk = require("chalk");
import {Song} from "./class/Song";
import {SongManage} from "./manager/songManage";
import {Regex} from "./manager/regex";


let input = require('readline-sync');
let albumManager1 = new AlbumManage()
let songsManage1 = new SongManage()
let checkName = new Regex()


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
    let album: Album = new Album(id, name, status);
        if(checkName.checkNameRegex(name) ){
             console.log(' Congratulate !');
             albumManager1.add(album)
        } else {
            console.log(`Album name can't be blank !!`)
        }
}

function showMenuAlbum() {
    console.log(`
     —-------- Menu Album —-------
    `)
    let album = albumManager1.show();
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
        menuSongInAlbum(albumChoice);
    }

}

function editAlbum() {
    console.table(albumManager1.show())
    console.log("-----Update name Album-----")
    let name = input.question("Input Name: ")
    if (albumManager1.checkName(name) === false) {
        console.log('Error');
    } else {
        let id = +input.question("Choose ID to edit: ")
        let index = albumManager1.findById(id);
        let newName = input.question("Enter a new name to edit: ");
        if(checkName.checkNameRegex(name) && newName !== albumManager1.albums[index].nameAlbum ){
            console.log(' Name change successful !');
            albumManager1.albums[index].nameAlbum =newName
            console.table(albumManager1.show())
        } else {
            console.log(`Album name cannot be the same !!`)
        }

    }

}


function delAlbum() {
    let choice = -1;
    do {
        console.table(albumManager1.show())
        console.log((chalk.gray(`------ Do you want to remove album ?------
    1. Yes
    2. No
    `)))


        choice = +input.question(" Enter choice : ")
        switch (choice) {
            case 1:
                RemoveAlbum()
                break;
            case 2:
                showMenu()
                break;
        }
    }
    while (choice !== 0);
}

function RemoveAlbum() {
    console.log('-----Delete album----- ')
    let id = input.question(" Input album ID to DELETE: ")
    albumManager1.remove(id);
    console.log("----You have successfully Deleted !!!!!")
    showMenuAlbum()

}

function findSongInAllAlbum() {
    let name = input.question("Enter the name of the song you want to find: ")
    songsManage1.findByNameAndPrintAndReturnNumber(name)
}

function menuSongInAlbum(album: Album) {
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
                findSongInAlbum(album)
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

    let id: number = songsManage1.getIDSong()
    let songName: string = input.question("Enter name: ")
    let status: boolean = input.question("Enter status: ")
    let newSong = new Song(id, songName, status)
    if(checkName.checkNameRegex(songName) ){
        if (album.statusAlbum===true){
            console.log(' Congratulate !');
            songsManage1.add(newSong);
            album.addSong(newSong)
        } else {
            console.log(`The album has a status of false so can't add music!!`)
        }

    } else {
        console.log(`Song name can't be blank !!`)
    }
}

function editSong(album: Album) {
    console.log("-----Update name Album-----")
    let name = input.question("Input Name: ")
    if (album.checkName(name) === false) {
        console.log('Error');
    } else {
        let id = +input.question("Choose ID to edit: ")
        let index = album.findByIdSongInAlbum(id);
        let newName = input.question("Enter a new name to edit: ");
        if(checkName.checkNameRegex(name) && newName !== album.getSongInAlbum()[index].nameSong ){
            console.log(' Song name change successful !');
            album.getSongInAlbum()[index].nameSong = newName
            console.table(album.getSongInAlbum())
        } else {
            console.log(`Song name cannot be the same !!`)
        }

    }
}

function deleteSong(album: Album) {

    let choice = -1;
    do {
        console.table(album.getSongInAlbum())
        console.log((chalk.gray(`------ Do you want to remove music from the album ${album.nameAlbum} ?------
    1. Yes
    2. No
    `)))


        choice = +input.question(" Enter choice : ")
        switch (choice) {
            case 1:
                Remove(album)
                break;
            case 2:
                menuSongInAlbum(album)
                break;
        }
    }
    while (choice !== 0);
}

function Remove(album: Album) {
    console.log("-----Delete songs-----")
    let id = +input.question("Enter the ID you want to delete: ")
    songsManage1.remove(id)
    album.remove(id)
    console.log("----You have successfully Deleted !!!!!")
    menuSongInAlbum(album)
}

function showSongInAlbum(album: Album) {
    console.log(album.getSongInAlbum())

}


function findSongInAlbum(album: Album) {
    let name = input.question("Enter the name of the song you want to find: ")
    album.findByNameAndPrintAndReturnNumber(name)

}

showMenu()