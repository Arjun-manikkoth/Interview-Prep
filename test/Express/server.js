import express from "express";

const app = express();

//write a middle ware

app.use();

app.listen(3001, (err) => {
    if (err) {
        console.log("an error occured");
    }
    console.log("server is running");
});
