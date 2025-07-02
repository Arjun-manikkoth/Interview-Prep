// condition the array has to be sorted

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function binarySearch(arr, element) {
    let leftIndex = 0,
        rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] === element) {
            return middleIndex;
        } else if (arr[middleIndex] < element) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, 5));
