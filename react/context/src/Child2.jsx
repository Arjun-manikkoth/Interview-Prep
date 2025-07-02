import React from "react";
import { useContext } from "react";
import { Context } from "./Context";

const Child2 = () => {
    const value = useContext(Context);
    return <div>Child 2{value}</div>;
};
export default Child2;
