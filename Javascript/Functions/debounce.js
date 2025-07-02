function debounce(func, delay) {
    let timeout;

    return function () {
        console.log(func, delay, "fun");
        clearTimeout(timeout);

        //logic to fetch some data
        timeout = setTimeout(func, delay);
    };
}

const debouncedFetch = debounce(() => {
    console.log("Data fetched successfully");
}, 3000);

for (let i = 0; i < 5; i++) {
    debouncedFetch();
}
