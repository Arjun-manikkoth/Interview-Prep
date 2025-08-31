function first() {
    second();
}

function second() {
    third();
}

function third() {
    // throw new Error("Something went wrong!");
}

first();

const error = new Error("error occured");
console.log("msg :", error.message, "name:", error.name, "stack:", error.stack);

// 4 METHODS TO PRINT STACK TRACE

// * Using error.stack Property
// * Using Error.captureStackTrace() Method
// * Using try-catch block
// * Using trace command console.trace()

function firstFunction() {
    secondFunction();
}

function secondFunction() {
    throw Error();
    thirdFunction();
}

function thirdFunction() {
    // console.trace(); // Generates the stack trace here
}

firstFunction();
console.trace();
