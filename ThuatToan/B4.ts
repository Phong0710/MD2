let input = require('readline-sync');

function showMenu() {
    let choice = -1
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Nhập n. Tính S=1.2 + 2.3 + 3.4+...n(n+1)
        2.Nhập n. Tính S=1/2 + 3/4 + 5/6 +...+ 2n+1/2n+2
        3.Nhập n. Tính S=100 + 1/3 + 1/2 + 3/5 +...+ n(n+1)/(n+1)*(n+2)
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                Vlap1()
                break
            case 2:
                Vlap2()
                break;
            case 3:
               VLap3()
                break;
        }
    }
    while (choice !== 0);
}
function Vlap1(){
    let a = +input.question("Nhap a")
    let sum:number=0
    for (let i = 0; i <= a; i++) {
        sum += i*(i+1)
    }
    console.log(sum)
}
function Vlap2(){
    let a = +input.question("Nhap a")
    let sum:number=0
    for (let i = 0; i <= a; i++) {
        sum += (2*i+1)/(2*i+2)
    }
    console.log(sum)

}
function VLap3() {
    let a = +input.question("Nhap a")
    let sum: number = 100
    for (let i = 0; i <= a; i++) {
        sum += i / (i + 2)
        console.log(sum)
    }
}
showMenu()