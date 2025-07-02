let array = [1, 3, "d", {}, 5, { name: "arjun", age: 34 }];

function filterArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    console.log(sum);
}

filterArray(array);
