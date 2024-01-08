import './App.css';
import NavBar from './NavBar'
import Home from './Home'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
