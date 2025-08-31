// find the sum of array using recursion

let a = [1, 2, 3, 4, 5];

function findSum(arr, index = 0, sum = 0) {
    if (index == arr.length) {
        return sum;
    }

    return findSum(arr, index + 1, arr[index] + sum);
}

console.log(findSum(a));
