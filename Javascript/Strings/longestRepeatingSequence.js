//Longest repeating sequence
const str = "etrraartutraaaaa";
//Output : "aaaaa;

function longestSequence(str) {
    let map = {};
    let temp = "";

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === str[i]) {
            temp += str[i];
        } else {
            temp = "";
            count = 0;
        }
    }
    console.log(map, "map");
}

longestSequence(str);
