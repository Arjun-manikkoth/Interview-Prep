//input - "a/:bb/c/:dd" - "a/tt/c/1"
//output {  bb: 'tt',  dd: '1'}

// console.log(req.params);

const url = "a/tt/c/1";
const pattern = "a/:bb/c/:dd";

function urlManipulate(url, pattern) {
    let paramArr = url.split("/");
    let patternArr = pattern.split("/");
    let params = {};

    paramArr.forEach((each, i) => {
        if (patternArr[i].startsWith(":")) {
            params[patternArr[i].slice(1)] = each;
        }
    });
    console.log(params);
}

urlManipulate(url, pattern);
