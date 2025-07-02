import { useState } from "react";

function useCounter(initialState = 0) {
    const [count, setCount] = useState(initialState);

    function increment() {
        setCount((prev) => prev + 1);
    }

    return [count, increment];
}

export default useCounter;
