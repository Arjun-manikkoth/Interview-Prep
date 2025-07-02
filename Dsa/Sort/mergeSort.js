const array = [5, 3, 4, 1, 2, 9];

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mide);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    let sortedArr = [];

    if (leftArr[0] > rightArr[0]) {
        sortedArr.push(rightArr.shift());
    } else {
        sortedArr.push(leftArr.shift());
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}
mergeSort(arr);
