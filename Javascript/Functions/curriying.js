//* CURRIYING:- Breaking down functions with multiple parameters to a chain of functions with single parameters

//normal function

function volume(l, b, h) {
    return l * b * h;
}

// console.log(volume(1, 2, 3));

//it can be converted in to

function length(l) {
    return function area(b) {
        console.log(l * b, "area");
        return function volume(h) {
            console.log(l * b * h);
        };
    };
}

// length(1)(2)(3);

//Application of curriying

// * partial application
// * Breaking complex functions to simpler ones
// * function composition
// * locking arguments

//eg:-

// function multiply(a) {
//     return function (b) {
//         return a * b;
//     };
// }

// const multi = multiply(2);

// console.log(multi(3));
// console.log(multi(4));
