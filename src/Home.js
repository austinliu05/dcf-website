import './Home.css'
import { useState } from 'react'

const Home = () => {
    const [data, setData] = useState([{}])
    const sendData = (data) => {
        fetch("http://127.0.0.1:5000/test", {
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
    const handleButtonClick = () => {
        let data = {"test": "hi"}
        sendData(data)
    };
    return (
        <div>
            <h1 className='title'>AutoDCF</h1>

            <div className='userInput'>
                <button onClick={handleButtonClick}></button>
            </div>
        </div>

    );
}

export default Home;