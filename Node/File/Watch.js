import fs from "fs";

fs.watch("example.txt", (eventType, filename) => {
    if (filename) {
        console.log(`${filename} file Changed!`);
    }
});
