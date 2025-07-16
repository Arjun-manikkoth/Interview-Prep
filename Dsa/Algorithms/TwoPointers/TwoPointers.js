// This technique uses two pointers to iterate input data.
// Generally, both pointers move in the opposite direction at a constant interval;
// Ds Involved: Array,String,LinkedList;

const str = "abcba";

function checkPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] != str[j]) {
            console.log("not a palindrome");
            return;
        }
    }
    console.log("is palindrome");
}

checkPalindrome(str);
