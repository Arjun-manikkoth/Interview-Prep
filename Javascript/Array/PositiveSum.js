const mixedArr = [1, "5", -3, true, 7, "hello", 0, 4, -1, null];

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number" && arr[i] > 0) {
            sum += arr[i];
        }
    }
    console.log("sum = ", sum);
}
positiveSum(mixedArr);
