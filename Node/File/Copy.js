import fs from "fs";

fs.copyFile("source.txt", "destination.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File copied successfully!");
});
