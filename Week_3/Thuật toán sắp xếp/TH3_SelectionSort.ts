class SelectionSort {
    static arr: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5];
    public static selectionSort(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            let min_pos = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min_pos]) {
                    min_pos = j;
                }
            }
            let temp = arr[i];
            arr[i] = arr[min_pos];
            arr[min_pos] = temp;
        }
        return arr;
    }
}
SelectionSort.selectionSort(SelectionSort.arr);
for (let i = 0; i < SelectionSort.arr.length; i++)
    console.log(SelectionSort.arr[i] + " ");