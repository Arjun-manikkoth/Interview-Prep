//find the second largest and second smallest element in the array

let array = [1, 3, 2, 4, 5, 6, 6, 5, 7];

function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }

    console.log(secondLargest, secondSmallest);
}

secondLargest(array);
