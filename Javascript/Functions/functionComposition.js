// function add(a, b) {
//     return a + b;
// }
// function multiply(c, d) {
//     return c * d;
// }
// console.log(multiply(add(1, 2), 3));

// Example of function composition
const add = (x) => x + 2;
const multiply = (x) => x * 3;
const compose = (f, g) => (x) => f(g(x));
const addAndMultiply = compose(multiply, add);

console.log(addAndMultiply(5)); // Output: 21 (add(5) is 7, multiply(7) is 21)
