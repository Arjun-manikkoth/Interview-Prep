//coutn vowels in a string

const str = "arjunsrog";

function countVowels(str) {
    if (!str.length) {
        console.log("Enter a valid string");
        return false;
    }
    let count = 0;
    str = str.toLowerCase();
    let vowels = "aeiou";

    for (let word of str) {
        if (vowels.includes(word)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels(str));
