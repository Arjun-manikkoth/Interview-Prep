import React from "react";
const Context = React.createContext(null);

const DataContext = (props) => {
    return (
        <>
            <Context.Provider value={100}>{props.children}</Context.Provider>
        </>
    );
};
export default DataContext;
export { Context };
