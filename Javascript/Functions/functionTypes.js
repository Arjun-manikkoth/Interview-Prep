//1.**NORMAL FUNCTIONS/FUNCTION DECLARATION *//

function normal(a, b) {
    console.log(a + b);
}
// normal(1, 3);

const expression = function (a, b) {
    console.log(a + b);
};
// normal(1, 3);

//-----------------------------------------------------------------------------------------------------------------------

// 2.** ARROW FUNCTION */

const arrowFn = (a, b) => {
    //example of function expression/statement
    console.log(a + b);
};
// arrowFn(1, 3);

//----------------------------------------------------------------------------------------------------------------------

//3.** ANONYMOUS FUNCTION */

const anonymous = function (a, b) {
    console.log(a * b);
};
// anonymous(1, 5);

//----------------------------------------------------------------------------------------------------------------------

//4.** GENERATOR FUNCTION */

function* Generator(limit) {
    let count = 1;

    while (true) {
        yield count * limit;
        count++;
    }
}

// const generator = Generator(5);

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// const generator1 = Generator(6);

// console.log(generator1.next().value);
// console.log(generator1.next().value);
// console.log(generator1.next().value);
// console.log(generator1.next().value);
// console.log(generator1.next().value);
// console.log(generator1.next().value);

//** APPLICATIONS:- */

// used for partial execution of functions
// used as infinite loop
// used to process large datasets small chunk by chunk (image processing)

//** ASYNC FUNCTIONS */

async function asynchronous() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2]);
        }, 3000);
    });
}

// asynchronous().then((data) => {
//     console.log(data[0] + data[1]);
// });

async function asynchro() {
    const response = await fetch("https://example.com/data");
    const data = await response.json();
    return data;
}

//promise resolve and reject functions only accept single argument

//-----------------------------------------------------------------------------------------------------------------------------------

//5.** CONSTRUCTOR FUNCTION */

function Person(name) {
    this.name = name;
}
const person = new Person("arjun");
console.log(person);

//-------------------------------------------------------------------------------------------------------------------------------------

//6.** IIFE */

(function () {
    const message = "Hello from IIFE!";
    console.log(message);
})();

// memory will be created in its own scope and and released after use without causing any issues

//avoids naming collisions, memory safe, encapsulate
