import React from "react";

function Child(props) {
    return (
        <div>
            <div>Child</div>
            <button onClick={() => props.displayFn("data from child")}>Click me</button>
        </div>
    );
}

export default Child;
