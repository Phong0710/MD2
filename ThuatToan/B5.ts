function UCLN(a: number, b: number): void {
    let temp: number
    let pos: number = 0;
    if (a < b) temp = a;
    else  temp = b
    for (let i = 0; i <= temp; i++) {
        if (a % i === 0 && b % i === 0) {
            // if (pos < i) {
            //     pos = i
            // }
            pos = i
        }
    }
    console.log(`Ước chung lớn nhât là : ${pos}`)
    console.log(`Bội chung nhỏ nhât là : ${(a*b)/pos}`)
}

UCLN(9, 90)