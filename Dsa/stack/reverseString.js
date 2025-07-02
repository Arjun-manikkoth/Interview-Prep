const str = "arjun";

function reverseString(str) {
    let stack = [];
    let reversedStr = "";

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    for (let j = 0; j < str.length; j++) {
        reversedStr += stack.pop() + " ";
    }
    console.log(reversedStr);
}
reverseString(str);
