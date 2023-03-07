import {MapLogin} from "./mapLogin";
import {Regex} from "../manager/regex";
import {showMenu} from "../menu";

let input = require('readline-sync');
let MAP = new MapLogin()

function Main() {
    let choice = -1
    do {
        console.log(`
        -------MENU LOGIN-------
         1: Login
         2: Sign In
         0. Exit
         `);
        choice = +input.question(`Enter number :`);
        switch (choice) {
            case 1:
                Login();
                break;
            case 2:
                SignIn();
                break;
        }

    } while (choice != 0)
}

 function Login() {
    console.log(`
                -------MENU NEW USER-------`);
    let account = input.question(`Account :`);
    let checkAccount = new Regex().checkNameRegex(account);
    let pass = input.question(`Password :`);
    let checkPass = new Regex().checkNameRegex(pass);
    if (checkAccount === true && checkPass === true && MAP.checkLogin(account, pass) === true) {
        console.log("Log in successfully ");
        showMenu()

    } else {
        console.log("Wrong account or password ")
    }


}


function SignIn() {
    console.log(`
                -------MENU-------`);
    let account = input.question(`Account :`);
    let checkAccount = new Regex().checkNameRegex(account);
    let pass = input.question(`Password :`);
    let checkPass = new Regex().checkNameRegex(pass);
    if (checkAccount == true && checkPass == true && MAP.checkAccount(account) == false) {
        MAP.addMap(account, pass);
        console.log("Sign Up Success ");
    } else {
        console.log("Username or password not accepted");

    }
}


Main();