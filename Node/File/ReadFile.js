import fs from "fs";

//async file reading

fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

//sync file reading operation

try {
    const data = fs.readFileSync("hell1.txt", "utf8");
    console.log(data, "file data from the sync read method");
} catch (err) {
    console.log("an error occured while reading file");
}
