function throttling(func, delay) {
    let isTime = false;

    return function () {
        if (!isTime) {
            func();
            isTime = true;

            setTimeout(() => {
                isTime = false;
            }, delay);
        }
    };
}

let throttleFetch = throttling(() => {
    console.log("api call");
}, 1000);
