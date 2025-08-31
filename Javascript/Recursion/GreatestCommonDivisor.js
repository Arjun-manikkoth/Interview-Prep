// greatest common divisor of two positive numbers

function greatestDivisors(num1, num2) {
    if (num1 < 1 || num2 < 1) {
        return null;
    }

    let len = num1 < num2 ? num1 : num2;

    let greatestDivisor = 0;

    for (let i = 1; i <= len; i++) {
        if (num1 % i !== 0 || num2 % i !== 0) {
            continue;
        }

        if (i > greatestDivisor) {
            greatestDivisor = i;
        }
    }
    return greatestDivisor;
}
console.log(greatestDivisors(4, 8));

// approach

// loop and find the common divisors
// check if it is greatest
// return greatest divisors

// the recursive version can be done with euclidean algorithm
