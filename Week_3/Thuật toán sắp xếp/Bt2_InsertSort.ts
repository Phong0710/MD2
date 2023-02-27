function BT1_InserSort(arr:number[]):number[]{
    for (let i = 0; i < arr.length; i++) {
        let curren = arr[i];
        let pos = i - 1
        while (pos>=0 && curren<arr[pos]){
            arr[pos+1]=arr[pos]
            pos--;
            console.log(arr)
        }
        arr[pos+1]=curren
        console.log(arr)
    }
    return arr;

}
let arr:number[]=[1,3,12,4,6,2,3]
console.log(BT1_InserSort(arr))