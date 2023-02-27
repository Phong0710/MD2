function findItemMiss(data: number[]): number[] {
    let i :number =1;
    let arr:number[]=[]
    while (i<=10){
        if(data.indexOf(i)==-1){
            arr.push(i)
        }
        i++;
    }
    return arr
}

console.log(findItemMiss([1,2,5,6,7,10]))