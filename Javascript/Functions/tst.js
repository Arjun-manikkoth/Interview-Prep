//find the greatest of 3 numbers

function findGreatest(a, b, c) {
    if (b > a && b > c) {
        console.log("b is greatest");
    } else if (a > b && a > c) {
        console.log("a is greatest");
    } else if (c > a && c > b) {
        console.log("c is greatest");
    } else {
        console.log("All numbers are equal");
    }
}

findGreatest(2, 2, 2);
