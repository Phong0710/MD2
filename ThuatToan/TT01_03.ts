// let arr:number[]=[2,10,4,10,4,10,6,10]
// let total:number = 0;
// for (let i = 1; i < arr.length; i+=2) {
//      total += arr[i]
// }
// console.log(total)

let ngay,thang,nam;
let N=800
nam = Math.floor(N/360)
console.log(nam)
thang=Math.floor((N-(nam*365))/30)
console.log(thang)
ngay=Math.floor(N-(nam*365)-(thang*30))
console.log(ngay)