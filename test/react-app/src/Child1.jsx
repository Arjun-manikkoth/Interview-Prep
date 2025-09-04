import { useContext } from "react";
import { Context } from "./App";

function Child1() {
    let value = useContext(Context);
    return (
        <>
            <div>Child1 data</div>

            {value.state}

            <button onClick={() => value.setState("data from child1")}>
                Child1 button for test
            </button>
        </>
    );
}

export default Child1;
