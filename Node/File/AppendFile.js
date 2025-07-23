import fs from "fs";

fs.appendFile("hello.txt", "appended data async", (err) => {
    if (err) {
        console.log("Error while appending");
        return;
    }
    console.log("appended successfully");
});

try {
    fs.appendFileSync("hello.txt", "this is new sync content");
} catch (err) {
    console.log("an error occured");
}

const data = fs.readFileSync("hello.txt", "utf8");

console.log(data, "data");
