import express from "express";

const app = express();

// write a middle ware to limit rate

// limit requests within a time (1 minute)
// limit the no of requests from an ip 10
// there should be  a start time and check whether the difference is greater that 1 minutes with the current time
// filter out logs per ip older than 1 minute and store the ip and count of requests in the map
// filter out old request log and store the timestamps of global requests

let reqLimitPerIp = 10;
let reqLimitPerMinute = 100;
let requestLogs = {};
let totalRequests = [];
let timeLimit = 1 * 60 * 1000;

function rateLimit(req, res, next) {
    const now = Date.now();
    let ip = req.ip;

    if (!requestLogs[ip]) {
        requestLogs[ip] = [];
    }

    totalRequests = totalRequests.filter((timeStamp) => now - timeStamp < timeLimit); //filter out old request timestamps

    if (totalRequests.length > reqLimitPerMinute) {
        return res.json({ message: "Too many requests try after sometime", success: false });
    } // sends response if the total request exceeds

    //logs the timestamps of the requests associated with ip

    requestLogs[ip] = requestLogs[ip].filter((each) => now - each < timeLimit); //reqmove requests older than 1 min

    if (requestLogs[ip].length >= reqLimitPerIp) {
        return res.json({ message: "Too many requests wait 1 minute", success: false });
    } // sends response if ip req limit exceeded

    requestLogs[ip].push(now); //add timestamps per ip
    totalRequests.push(now);

    next();
}

app.use(rateLimit);

app.listen(3002, (err) => {
    if (err) {
        console.log("an error occured", err);
        return;
    }
    console.log("server is running");
});
