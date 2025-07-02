//remove duplicate even numbers from the array

const array = [1, 2, 2, 2, 3, 2, 4, 4, 5, 6, 6, 7, 7];

function removeDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && arr[i] % 2 == 0) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
console.log(removeDuplicates(array));
