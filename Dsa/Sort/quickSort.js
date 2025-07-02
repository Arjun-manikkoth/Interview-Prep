const arr = [21, 2, 13, 4, 15];

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(arr));
