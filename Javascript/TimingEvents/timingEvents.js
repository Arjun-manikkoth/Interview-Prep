// js can be exectuted in time intervals this is called timing events

//** SET TIMEOUTS AND SETINTERVAL */

// const timeout = setTimeout(() => {
//     console.log("3 seconds passed");
// }, 3000);

// clearTimeout(timeout);

// //-----------------------------------------------------------------------------

// const interval = setInterval(() => {
//     console.log("Every 3 seconds");
// }, 3000);

// clearInterval(interval);

// function to start timer of 1 second delay

function timer(limit) {
    let count = 0;

    const data = setInterval(() => {
        if (limit <= count) {
            clearInterval(data);
        } else {
            console.log("timer");
            count++;
        }
    }, 1000);
}
timer(5);
