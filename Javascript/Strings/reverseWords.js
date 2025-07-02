//reverse words "arjun villa"  --> "nujra alliv"
const str = " arjun villa";

function reverseWords(str) {
    return str
        .split(" ")
        .map((element) => {
            return element.split("").reverse().join("");
        })
        .join(" ");
}
// console.log(reverseWords(str));
