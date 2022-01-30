import React from 'react';
import { BrowserRouter as Router, Link  } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <h1>Friends DataBase</h1>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/friends">Friend List</Link>
                <Link to="/friends/add">Add Friend</Link>
                <Link to="/logout">Logout</Link>
            </nav>
        </div>
    )
}

export default NavBar;