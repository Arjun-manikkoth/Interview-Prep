let arr = [1, 2, 3, 4, 5, 7, 8];

function linearSearch(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }

    console.log("element not found");

    return -1;
}

console.log(linearSearch(arr, 5));
//o(n)
//search proceeds sequentially until the matched element if found
