let arr: number[] = [0, 1, 3, 5, 7, 9];
let arr1: number[] = [];
let i = 0
let number = 10
while (i <= number) {

        if (arr.indexOf(i) == -1) {
            arr1.push(i)
        }
        i++
}
console.log(arr1)
