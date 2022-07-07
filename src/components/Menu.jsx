import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <div className="menuBar">
            <div className="logo">
                <Link to="/">El projecto</Link>
            </div>
            <div className="links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
     );
}
 
export default Menu;