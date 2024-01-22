import './Home.css'
import { useState } from 'react'

const Home = () => {
    const [selectedYear, setSelectedYear] = useState('2000');
    const [isGen, setGenSt] = useState(false)
    // Create an array of years from 2000 to 2024
    const years = Array.from({ length: 25 }, (_, i) => 2000 + i);

    // Handle change in selection
    const handleChange = (event) => {
        setSelectedYear(event.target.value);
    };
    const [data, setData] = useState([{}])
    const generateFile = (data) => {
        fetch("http://127.0.0.1:5000/generate-file", {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(
                res => res.json())
            .then(responseData => {
                console.log("Server Response:", responseData);
                responseData = JSON.parse(responseData)
            })
            .catch(error => {
                console.error("Error sending data:", error);
            });
    };
    const genBtn = () => {
        let data = {selectedYear}
        console.log(selectedYear)
        generateFile(data)
        setGenSt(true)
    };
    const downBtn = () => {
        let data = {selectedYear}
        console.log(selectedYear)
        generateFile(data)
    };
    const close = () => {
        setGenSt(false)
    };
    return (
        <div>
            <h1 className='title'>AutoDCF</h1>
            <label htmlFor="year-select">Choose a year:</label>
            <select id="year-select" value={selectedYear} onChange={handleChange}>
                {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            <div className='userInput'>
                <button onClick={genBtn}>Generate</button>
            </div>
            {isGen && <button onClick={downBtn}>Download</button>}
            <button onClick={close}>Close</button>
        </div>

    );
}

export default Home;