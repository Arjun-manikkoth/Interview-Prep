//find the largest element in the array

let array = [1, 2, 3, 4, 5, 6, 6];

function largest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest);
}
largest(array);
