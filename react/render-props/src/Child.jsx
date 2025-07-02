import React from "react";

function Child(props) {
    return <>{props.render()}</>;
}

export default Child;
