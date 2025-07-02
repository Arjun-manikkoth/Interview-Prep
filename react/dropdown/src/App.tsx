import React, { useState } from "react";
import "./App.css";

function App() {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [country, selectedCountry] = useState<string>("");
    const data = [
        {
            country: "USA",
            cities: ["New York", "Los Angeles", "Chicago"],
        },
        {
            country: "India",
            cities: ["Mumbai", "Delhi", "Bangalore"],
        },
        {
            country: "Germany",
            cities: ["Berlin", "Munich", "Frankfurt"],
        },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDropdown(true);
        selectedCountry(e.target.value);
    };

    const selectedCities = data.find((each) => each.country === country);

    return (
        <>
            <select name="" id="" onChange={handleChange}>
                {data.map((each, index) => (
                    <option key={index} value={each.country}>
                        {each.country}
                    </option>
                ))}
            </select>

            {dropdown && (
                <select name="" id="">
                    {selectedCities?.cities.map((each, index) => (
                        <option key={index} value={each}>
                            {each}
                        </option>
                    ))}
                </select>
            )}
        </>
    );
}

export default App;
