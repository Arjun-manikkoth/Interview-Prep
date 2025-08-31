import "./App.css";
import useCounter from "./hook";

function App() {
    const [count, increment] = useCounter();

    return (
        <>
            <div>count:{count}</div>
            <button style={{ backgroundColor: "red" }} onClick={increment}>
                click me
            </button>
        </>
    );
}

export default App;
