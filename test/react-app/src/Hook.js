import { useState } from "react";

function useStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        let item = localStorage.getItem(key);

        if (item) {
            return item;
        } else {
            return initialValue;
        }
    });

    return [value];
}

export { useStorage };

//store in local storage and fetch from local storage
