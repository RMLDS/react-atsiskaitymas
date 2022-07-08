import jwt from 'jwt-decode';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const Menu = () => {
    let location = useLocation();
    const [loggedIn, setLogin] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token');
        token ? setLogin(true) : setLogin(false);
        console.log("Location changed. Token =", token);
        setUser(jwt(token).email);
    }, [location]
    );

    return (
        <div className="menuBar">
            <div className="logo">
                <Link to="/">El projecto</Link>
            </div>
            <div className="links">
                {
                    loggedIn ? (<>
                        <p>Welcome {user}</p>
                        <Link to="/">Home</Link>
                        <Link to="/add">Add</Link>
                    </>) : <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                }
            </div>
        </div>
    );
}

export default Menu;