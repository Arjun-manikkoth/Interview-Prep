//capitalise first letter of each word

let strings = "    hello    world    ";

function capitaliseFirst(str) {
    let output = "";
    let flag = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " " && flag === true) {
            output += str[i].toUpperCase();
            flag = false;
        } else {
            if (str[i] === " ") {
                flag = true;
            }
            output += str[i];
        }
    }
    console.log(output);
}
capitaliseFirst(string);

//more optimised code

// eg:-
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newStr = str.replace(re, "$2, $1");
console.log(newStr); // Cruz, Maria
