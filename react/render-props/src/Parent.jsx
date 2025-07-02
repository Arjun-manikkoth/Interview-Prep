import React from "react";
import Child from "./Child";

function Parent() {
    return (
        <div>
            <div>Parent</div>
            <Child
                render={() => {
                    return <div>This is a child rendering logic 3</div>;
                }}
            />
            <Child
                render={() => {
                    return <div>This is a child rendering logic 2</div>;
                }}
            />
        </div>
    );
}

export default Parent;
