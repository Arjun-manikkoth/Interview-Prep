const input = { a: 1, b: { c: 2, d: { e: 3 } } };
// Output: { "a": 1, "b.c": 2, "b.d.e": 3 }

function flatObject(obj) {
    if (typeof obj != "object") {
        return obj;
    }

    for (let each in obj) {
        if (typeof obj[each] === "object") {
            flatObject(obj[each]);
        }
    }
    let resultObj = {};
}

flatObject(input);
