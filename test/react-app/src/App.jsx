import "./App.css";
import { createContext } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from "react";

export let Context = createContext(null);

function App() {
    const [state, setState] = useState("");
    return (
        <>
            <Context.Provider value={{ state, setState }}>
                <Child1 />
                <Child2 />
            </Context.Provider>

            <div>review</div>
        </>
    );
}

export default App;
