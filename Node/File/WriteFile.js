import fs from "fs";

//sync write file operation

fs.writeFileSync("write.txt", "this is the write data");

//async write file operation

fs.writeFile("write1.txt", " this is the new write operation", (err) => {
    if (err) {
        console.log(err);
        return;
    }
});
