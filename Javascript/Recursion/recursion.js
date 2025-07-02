//multiplication table of 5 using recursion

function multiply(num, limit, count = 1) {
    if (count > limit) {
        return;
    }
    console.log(num * count);
    multiply(num, limit, count + 1);
}
// multiply(5, 20);

function sum(n) {
    if (n <= 0) {
        return n;
    }

    return n + sum(n - 1);
}

// console.log(sum(10));
