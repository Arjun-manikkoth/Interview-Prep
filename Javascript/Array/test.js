//find the frequency of an element in an array

//console the elements and their frequencies

let arr = [1, 2, 3, 3, 2, 2, 1, 1, 1, 9];

function frequency(arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }

    let max = -Infinity;
    let count = 0;

    for (let each in map) {
        if (count < map[each]) {
            max = map[each];
        }
    }

    console.log(max);
}

frequency(arr);
