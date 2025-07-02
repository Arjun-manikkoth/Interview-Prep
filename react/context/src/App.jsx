import "./App.css";
import Child1 from "./Child1";
import DataContext from "./Context";

function App() {
    return (
        <>
            <DataContext>
                <Child1 />
            </DataContext>
        </>
    );
}

export default App;
