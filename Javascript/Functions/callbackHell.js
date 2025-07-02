// function task1(i, cb) {
//     setTimeout(() => {
//         cb(i + 1);
//     }, 3000);
// }
// function task2(i, cb) {
//     setTimeout(() => {
//         cb(i + 2);
//     }, 2000);
// }
// function task3(i, cb) {
//     setTimeout(() => {
//         cb(i + 3);
//     }, 1000);
// }

// task1(1, (sum1) => {
//     task2(sum1, (sum2) => {
//         task3(sum2, (sum3) => {
//             console.log(sum3);
//         });
//     });
// });

//replace by async await

async function task1(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i + 1);
        }, 3000);
    });
}

async function task2(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i + 1);
        }, 2000);
    });
}

async function task3(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i + 1);
        }, 1000);
    });
}

async function start(val) {
    const result1 = await task1(val);
    const result2 = await task2(result1);
    const result3 = await task3(result2);
    console.log(result3);
}

start(1);
