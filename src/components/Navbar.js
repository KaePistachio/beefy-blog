import { Link } from 'react-router-dom';
import img from "./foxhound.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img 
                className="navimg"
                src={ img }
                alt="Foxhound"
            />
            <h1>the fox blog</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create">new blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;