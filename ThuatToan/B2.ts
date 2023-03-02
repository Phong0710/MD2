let input = require('readline-sync');

function showMenu() {
    let choice = -1
    do {
        console.log(
            `
        ---- Main Menu ----
        1.in ra số lẻ từ a đến b
        2.in ra từ a đến b ( chia hết 3 in Fizz, 5 in Buzz, cả 2 FizzBuzz
        3.in các số chính phương từ a đến b
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                SoLe()
                break
            case 2:
                FizzBuzz()
                break;
            case 3:
                ChinhPhuong()
                break;
        }
    }
    while (choice !== 0);
}
function SoLe(){
    let a = +input.question(`Nhap so a `)
    let b = +input.question(`Nhap so b `)
    for (let i = a; i < b; i++) {
        if( i%2 !==0){
            console.log(i)
        }
    }
}
function FizzBuzz(){
    let a = +input.question(`Nhap so a `)
    let b = +input.question(`Nhap so b `)
    for (let i = a; i < b; i++) {
        if( i%3 === 0 && i%5 === 0){
            console.log(`FizzBuzz`)
        } else if (i%3 === 0){
            console.log(`Fizz`)
        } else {
            console.log(`Buzz`)
        }
    }
}
function ChinhPhuong(){
    let a = +input.question(`Nhap so a `)
    let b = +input.question(`Nhap so b `)
    for (let i = a; i <= b; i++) {
        if(Math.sqrt(i) === Math.round(Math.sqrt(i))){
            console.log(i)
        }
    }
}
showMenu()