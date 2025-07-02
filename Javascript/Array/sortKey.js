const arr = [{ 1: "arjun" }, { 2: "arjun" }, { 3: "arjun" }, { 4: "arjun" }, { 5: "arjun" }];

function sortKey(arr) {
    arr.sort((a, b) => {
        const A = Object.keys(a)[0];
        const B = Object.keys(b)[0];
        return A - B;
    });
    return arr;
}
console.log(sortKey(arr));
