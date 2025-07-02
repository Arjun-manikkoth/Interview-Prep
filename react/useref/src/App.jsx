import { useRef, useState } from "react";
import "./App.css";

function App() {
    const ref = useRef(null);
    const [value, setValue] = useState("");
    const handleColourChange = () => {
        ref.current.style.backgroundColor = "red";
    };

    return (
        <>
            <div ref={ref} onClick={() => handleColourChange()}>
                Hello world
            </div>
            <div>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </>
    );
}

export default App;
