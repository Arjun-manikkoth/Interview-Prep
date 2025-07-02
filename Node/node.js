import fs from "fs";

// fs.writeFile("file1.txt", "hello", (err) => {
//     if (err) {
//         console.log("error reading file");
//         return;
//     }
//     console.log("file1 created successfully");
// });

// fs.writeFile("file2.txt", "world", (err) => {
//     if (err) {
//         console.log("error reading file");
//         return;
//     }
//     console.log("file2 created successfully");
// });

//this promise version of this fs module is only available in the node js v25 ig
// for the older versions kindly use the callback hell

// async function start() {
//     const data1 = await fs.readFile("file1.txt", "utf8", (err, data) => {
//         if (err) {
//             console.log("error reading file");
//             return;
//         }
//         return data;
//     });

//     const data2 = await fs.readFile("file2.txt", "utf8", (err, data) => {
//         if (err) {
//             console.log("error reading file");
//             return;
//         }
//         return data;
//     });

//     fs.writeFile("output.txt", `${data1} ${data2}`, (err) => {
//         if (err) {
//             console.log("error writinng 3");
//             return;
//         }
//         console.log(data1, data2);
//         console.log("file3 created successfully");
//     });
// }

// start();
