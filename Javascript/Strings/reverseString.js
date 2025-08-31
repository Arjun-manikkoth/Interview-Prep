let str = "arjun villa";

//normal reversal

function reverseString(str) {
    let strArr = str.split("");

    for (let i = 0, j = strArr.length - 1; i < Math.floor(strArr.length / 2); i++, j--) {
        temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp;
    }
    console.log(strArr.join(""));
}
// reverseString(str);

//recursive implementation

function recursiveReversal(str) {
    console.log(str);
    if (str.length === 1) {
        return str;
    }

    return str[str.length - 1] + recursiveReversal(str.substring(0, str.length - 1));
}
console.log(recursiveReversal(str));
