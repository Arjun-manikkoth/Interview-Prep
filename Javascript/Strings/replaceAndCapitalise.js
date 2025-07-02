const str = "ui_dev_guide";

function replaceAndCaptitalise(char, str) {
    if (typeof char != "string" || typeof str != "string") {
        return str;
    }
    if (str == "") {
        return str;
    }

    let wordArr = [];
    let word = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] == char && word) {
            wordArr.push(word);
            word = "";
        }
        if (str[i] != char) {
            word += str[i];
        }
    }

    if (word) {
        wordArr.push(word);
    }

    for (let j = 0; j < wordArr.length; j++) {
        wordArr[j] = wordArr[j].charAt(0).toUpperCase() + wordArr[j].slice(1);
    }

    return wordArr.join(" ");
}

console.log(replaceAndCaptitalise("_", str));
