let input = require('readline-sync');

function showMenu() {
    let choice = -1
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Tổng từ a đến b
        2.Tổng số chẳn từ a đến b
        3.Tổng bình phương các số từ x dến y
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                Sum()
                break
            case 2:
                SumChan()
                break;
            case 3:
                SumBinh()
                break;
        }
    }
    while (choice !== 0);
}
function Sum(){
    let a = +input.question(" Nhap a ")
    let b = +input.question(" Nhap b ")
    let sum:number = 0
    for (let i = a; i <=b ; i++) {
        sum += i
    }
    console.log(sum)
}
function SumChan(){
    let a = +input.question(" Nhap a ")
    let b = +input.question(" Nhap b ")
    let sum:number = 0
    for (let i = a; i <=b ; i++) {
        if(i%2===0)
        sum += i
    }
    console.log(sum)
}
function SumBinh(){
    let a = +input.question(" Nhap a ")
    let b = +input.question(" Nhap b ")
    let sum:number = 0
    for (let i = a; i <=b ; i++) {
            sum += i*i
    }
    console.log(sum)

}
showMenu()