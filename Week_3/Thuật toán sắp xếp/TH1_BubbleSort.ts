class BubbleSort {
    static list:number[]=[2,3,2,5,6,1,-2,3,14,12];
    static bubbleSort(arr: number[]):number[]{
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
}
BubbleSort.bubbleSort(BubbleSort.list);
for (let i = 0; i < BubbleSort.list.length; i++)
    console.log(BubbleSort.list[i] + " ");

