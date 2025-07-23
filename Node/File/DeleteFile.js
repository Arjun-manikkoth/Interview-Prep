import fs from "fs";

fs.unlink("write1.txt", (err) => {
    if (err) {
        console.log("error while deleting the file");
        return;
    }
});

try {
    fs.unlinkSync("write.txt");
} catch (err) {
    console.log("an error occured", err);
}
