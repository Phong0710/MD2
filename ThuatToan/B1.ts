let input = require('readline-sync');

function showMenu() {
    let choice = -1
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Nhập vào 1 số, kiểm tra xem số đó là chẳn hay lẽ
        2.Tìm số nhất nhất có 3 chữ số
        3.Nhập vào 3 cạnh của tam giác, cho biết loại của tam giác đó
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                Ktra()
                break
            case 2:
                TimSoLonNhat()
                break;
            case 3:
                TimTamGiac()
                break;
        }
    }
    while (choice !== 0);
}

function Ktra() {
    let a = +input.question(`Enter so muon kiem tra`);
        console.log(` Số ${a} là số ${a % 2 === 0? "chan": "le"}`)

}

function TimSoLonNhat() {
    let a = +input.question(`Nhap so thu 1 `)
    let b = +input.question(`Nhap so thu 2 `)
    let c = +input.question(`Nhap so thu 3 `)
    if (a > b && a > c) {
        console.log(` Số ${a} là số lớn nhất `)
    } else if (b > a && b > c) {
        console.log(` Số ${b} là số lớn nhất `)
    } else {
        console.log(` Số ${c} là số lớn nhất `)
    }
}

function TimTamGiac() {
    let a = +input.question(`Nhap canh a `)
    let b = +input.question(`Nhap canh b `)
    let c = +input.question(`Nhap canh c `)
    if (a + b > c && b + c > a && a + c > b) {
        if (a === b && b === c) {
            console.log(` Đây là tam giác đều`)
        } else if (a === b || a === c || b === c) {
            console.log(` Đây là tam giác cân`)
        } else if (a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b) {
            console.log(` Đây là tam giác tù`)
        } else if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
            console.log(` Đây là tam giác vuông`)
        } else {
            console.log(` Đây là tam giác nhọn`)
        }
    }
    console.log(` Đây không là 3 cạnh của 1 tam giác`)
}

showMenu()