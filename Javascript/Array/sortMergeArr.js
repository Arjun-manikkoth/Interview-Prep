// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

const arr1 = [3, 4, 2, 1, 6, 0];
const arr2 = [10, 11, 5, 7, 9, 8];

function sortMerge(arr1, arr2) {
    let flag = false;
    let arr = [...arr1, ...arr2];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }
        if (!flag) {
            return arr;
        }
    }
    return arr;
}
console.log(sortMerge(arr1, arr2));
