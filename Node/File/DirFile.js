import fs from "fs";

fs.mkdir("newDir", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("New directory has been created");
});

fs.readdir("newDir", (err, files) => {
    if (err) {
        console.log("error while reading a directory", err);
        return;
    }
    console.log("files", files);
});

fs.rmdir("newDir", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("New directory has been created");
});
