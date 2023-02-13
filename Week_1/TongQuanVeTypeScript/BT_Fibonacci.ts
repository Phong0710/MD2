let x: number = 0;
let y: number = 1;
let sum: number = 0;
let sum1: number = 0;
for (let i = 0; i < 18; i++) {
    sum = x+y;
    console.log(x);
    x=y;
    y=sum;
    sum1 += sum;
}
console.log(sum1)
