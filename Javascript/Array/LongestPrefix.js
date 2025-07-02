const arr = ["flow", "flower", "florine", "flur"];

function longestPrefix(arr) {
    let prefix = arr[0];

    for (let i = 1; i < arr.length; i++) {
        while (!arr[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);

            if (prefix === "") {
                return prefix;
            }
        }
    }
    return prefix;
}
console.log(longestPrefix(arr));
