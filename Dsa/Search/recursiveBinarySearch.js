// condition the array has to be sorted

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function recursiveBinarySearch(arr, element, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === element) {
        console.log("element found");
        return middleIndex;
    } else if (arr[middleIndex] < element) {
        return recursiveBinarySearch(arr, element, middleIndex + 1, rightIndex);
    } else {
        return recursiveBinarySearch(arr, element, leftIndex, middleIndex - 1);
    }
}

console.log(recursiveBinarySearch(arr, 5, 0, 7));
