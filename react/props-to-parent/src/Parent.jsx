import React, { useState } from "react";
import Child from "./Child";

function Parent() {
    const [display, setDisplay] = useState("");

    return (
        <div>
            Parent
            <Child displayFn={setDisplay} />
            {display}
        </div>
    );
}

export default Parent;
