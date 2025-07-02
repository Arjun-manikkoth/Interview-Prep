function fibonacci(limit, a = 0, b = 1) {
    if (a > limit) {
        return;
    }
    console.log(a);
    fibonacci(limit, b, a + b);
}
fibonacci(10);

//0 1 1 2 3 5 8

//without recursion

//0 1 1 2 3 5 8

function fibonacciLoop(limit) {
    let a = 0,
        b = 1;

    while (a <= limit) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}

fibonacciLoop(10);

function fibonacciMemoized(limit) {
    let series = [0, 1];

    for (let i = 2; i < limit; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    console.log(series);
}

fibonacciMemoized(10);
