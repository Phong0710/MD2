import chalk = require("chalk");
import {MyLoveManager} from "./manager/MyLoveManager";
import {MyLove} from "./class/MyLove";
import {Regex} from "./regex";

let input = require('readline-sync');
let myLoveManager1 = new MyLoveManager()
let checkName = new Regex()
function showMenu() {
    let choice = -1;
    do {
        console.log(chalk.cyan(
            `
            ----------Menu Album---------
            1. Show My Love
            2. Find Name My Love
            3. Add My Love
            4. Edit My Love
            5. Delete My Love
            0. Exit
            `
        ))
        choice = +input.question("Enter number : ")
        switch (choice) {
            case 1:
                showMyLove();
                break;
            case 2:
                findNameMyLove();
                break;
            case 3:
                addMyLove();
                break;
            case 4:
                editMyLove()
                break;
            case 5:
                deleteMyLove()
                break;
        }

    }
    while (choice !== 0)
}
function showMyLove(){
    console.table(myLoveManager1.showMyLove())
}
function findNameMyLove(){
    let name = input.question("Enter the name of the lover you want to find? ")
    myLoveManager1.findNameMyLove(name)
}
function addMyLove(){
    console.log(`----add my love-----`)
    let id:number=myLoveManager1.getIdMyLove()
    let nameMyLove:string=input.question(`Enter name: `)
    console.log(`
            1. Aries (21/3 - 20/4)
            2. Taurus (21/4 - 21/5)
            3. Cancer (22/6 - 22/7)
            4. Leo (23/7 - 23/8)
            5. Virgo (23/8 - 22/9)
            6. Libra (23/9 - 23/10)
            7. Scorpius (24/10 - 22/11)
            8. Sagittarius (23/10 - 21/12)
            9. Capricorn (22/12 - 19/1)
            10. Aquarius (20/1 - 18/2)
            11. Pisces (19/2 - 20/3)`)
    let choiceZodiac = input.question("Enter choice: ")
    let zodiac:string = Zodiac(choiceZodiac)
    let homeTown:string=input.question("Enter homeTown: ")
    let yearOfBirth:number=+input.question("Enter yearOfBrith: ");
    let hobby:string=input.question(`Enter hobby: `)
    let myLove:MyLove=new MyLove(id,nameMyLove,zodiac,homeTown,yearOfBirth,hobby)
    if(checkName.checkNameRegex(nameMyLove))
    console.log(' Congratulate !');
    myLoveManager1.addMyLove(myLove)
}
function Zodiac(choice:number):string{
   let arrZodiac=[`Aries (21/3 - 20/4)`
        ,`Taurus (21/4 - 21/5)`
        ,`Gemini (22/5 - 21/6)`
        ,`Cancer (22/6 - 22/7)`
        ,`Leo (23/7 - 23/8)`
        ,`Virgo (23/8 - 22/9)`
        ,`Libra (23/9 - 23/10)`
        ,`Scorpius (24/10 - 22/11)`
        ,`Sagittarius (23/10 - 21/12)`
        ,`Capricorn (22/12 - 19/1)`,
        `Aquarius (20/1 - 18/2)`,
        `Pisces (19/2 - 20/3)`,
    ]
    return arrZodiac[choice-1];
}

function editMyLove(){
    console.log(`------Update----`)
    let id = +input.question(`Choose ID to edit`)
    let index = myLoveManager1.findById(id)
    let newHobby = input.question(`Enter a new hobby to edit: `)
    console.log(' Edit successful !')
    myLoveManager1.myLove[index].hobby=newHobby

}
function deleteMyLove() {
    console.log(`------Delete My Love-----`)
    let id = +input.question(`Enter the ID you want to delete: `)
    myLoveManager1.removeMyLove(id)
}



showMenu()