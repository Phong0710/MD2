function DemSo(numbers:number[],value:number):number{
    let count:number=0;
    numbers.forEach((item)=>{
        if (item == value)
        count++
    })
    return count;
}
let arr:number[]=[1,5,3,4,5,6,5,6,5];
let index:number=5;
console.log(DemSo(arr,index))