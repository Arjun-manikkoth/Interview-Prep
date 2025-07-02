const arr = [21, 2, 13, 4, 15];

function bubbleSort(arr) {
    let flag = false;
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
    console.log(arr);
}
bubbleSort(arr);
