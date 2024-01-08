import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/"><a className='underline'>HOME</a></Link>
            </div>
        </nav>
    );
}

export default NavBar;