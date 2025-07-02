// check whether a string is palindrome or not

let string = "malayalam";

function checkPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
        if (str[i] != str[j]) {
            console.log("string is not palindrome");
            return;
        }
    }
    console.log("string is palindrome");
}

checkPalindrome(string);
