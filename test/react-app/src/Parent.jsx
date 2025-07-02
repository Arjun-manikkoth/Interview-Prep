import { useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [state, setState] = useState(true);

    const changeState = () => {
        setState((prev) => !prev);
    };

    const value = useMemo(() => {
        return 10;
    }, []);

    return (
        <>
            <button onClick={changeState}>Click to change state</button>
            <div>parent component</div>
            <Child value={value} />
        </>
    );
};

export default Parent;
