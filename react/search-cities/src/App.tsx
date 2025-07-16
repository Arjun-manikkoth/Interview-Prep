import { useState, type ChangeEvent } from "react";
import "./App.css";

function App() {
    const [country, setCountry] = useState<string[]>([]);

    const cities = [
        "New York",
        "London",
        "Tokyo",
        "Paris",
        "Mumbai",
        "Sydney",
        "Toronto",
        "Dubai",
        "Singapore",
        "Berlin",
    ];

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value.trim()) {
            setCountry([]);
            return;
        }
        const values = cities.filter((each) => {
            return each.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setCountry(values);
    };

    return (
        <>
            <input type="text" onChange={handleSearch} />
            <ul>
                {country.map((each, index) => (
                    <li key={index}>{each}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
