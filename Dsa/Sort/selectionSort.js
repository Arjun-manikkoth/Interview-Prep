const arr = [21, 2, 13, 4, 15];

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = arr[i];
        let index = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j];
                index = j;
            }
        }
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return arr;
}
selectionSort(arr);
