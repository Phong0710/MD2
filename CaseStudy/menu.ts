import {albumManager} from "./manager/managerAlbum";
import {Album} from "./class/Album";
import chalk = require("chalk");



let input = require('readline-sync');
let arrAlbum = new albumManager()
function showMenu(){
    let choice = -1;
    do {
        console.log(chalk.cyan(
            `
            ----------Menu Album---------
            1. New album.
            2. Show album.
            3. Edit album.
            4. Delete album.
            5. Find songs in albums
            0. Exit
            `
        ))
        choice = +input.question("Enter number : ")
        switch (choice) {
            case 1:
                addAlbum();
                break;
            case 2:
                showAlbum();
                break;
            case 3:
                editAlbum();
                break;
            case 4:
                delAlbum()
                break;
            case 5:
                findSongInAlbum()
                break;
        }

    }
    while (choice!==0)
}
function addAlbum(){
    console.log('-----Menu add album ------')
    let id = arrAlbum.getIDAlbum();
    let name = input.question('Enter Name: ');
    let status =  input.question('Enter status: ')
    let albums: Album  = new Album(id,name,status);
    arrAlbum.add(albums)
    console.log(' Congratulate !');
}
function showAlbum(){
    console.table(arrAlbum.show())

}
function editAlbum(){

}
function delAlbum(){
    console.log('-----Delete album----- ')
    let id = input.question(" Input album ID to DELETE: ")
    arrAlbum.remove(id);
    console.table(arrAlbum.show())

}
function findSongInAlbum(){

}


showMenu()