const str = "arjunvilla";

const result = str.split("");
// console.log(result);
let text = "HELLO WORLD";

let char = text.charAt(0);
// console.log(char);
// console.log(text.at(0))
// const res = result.slice(2);
// console.log(res);

console.log(str.substring(4, 3));
//slice and substring in js are almost same
//the difference lies in the inputs
//slice takes starting and ending indices
//substring takes starting index
console.log(str.startsWith("a"));
console.log(str.replace("a", "l"));
console.log(str.replaceAll("a", "l"));
console.log(str.repeat(3)); //input the no of times str should be the chosen character
