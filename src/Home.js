import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='title'>AutoDCF</h1>

            <div className='userInput'>
                <h2>Enter ticker symbol:</h2>
                <h2>Enter start fiscal year:</h2>
                <h2>Enter end fiscal year:</h2>
            </div>
        </div>

    );
}

export default Home;