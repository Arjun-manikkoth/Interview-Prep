// let a = [1, 3, 2];

// a[10] = 99;

// console.log(a.length);

//---------------------------------------------------------------------------------------------

// console.log(typeof Symbol); // function
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// console.log(null == undefined); // ? true
// console.log([] == false);       // ? type coercion converts dervied datatypes to primitive  array to string then it evaluates to false
// console.log([] == ![]);         // ? [] == false type coercion converts "" == false equates true;

console.log([] + {} + {}); // object

console.log([] + []); // "" (empty string)
console.log([1] + [2, 3]); // "12,3"
console.log([1, 2] + "3"); // "1,23"
