import { useContext } from "react";
import { Context } from "./App";

function Child2() {
    let value = useContext(Context);

    return (
        <>
            <div>Child2 data</div>

            {value.state}

            <button onClick={() => value.setState("data from child2")}>Child2 button</button>
        </>
    );
}

export default Child2;
