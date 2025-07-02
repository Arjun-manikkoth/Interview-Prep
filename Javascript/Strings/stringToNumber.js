//convert string to number excluding the non-numerical part
const str = "123str";

function convert(str) {
    let opStr = "";
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i])) {
            opStr += str[i];
        }
    }
    console.log(opStr);
}
convert(str);
