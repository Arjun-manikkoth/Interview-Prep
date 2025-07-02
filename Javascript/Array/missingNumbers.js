//find the missing numbers from the array till the max number

let arr = [1, 2, 4, 5, 6, 8, 11, 12];

function findMissing(arr) {
    // Find max (handle edge cases)

    let max = Math.max(...arr);
    if (max < 1) return [];

    let count = 0;
    let flag = false;
    let output = [];

    for (let i = 0; i < max; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === count) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            output.push(count);
        }
        count++;
        flag = false;
    }
    return output;
}

console.log("The missing elements in the array are", findMissing(arr));
