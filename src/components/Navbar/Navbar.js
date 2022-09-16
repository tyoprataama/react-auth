import React, {useContext} from 'react';
import './Navbar.css';
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <div className='nav-logo'>
                    <p>React Auth</p>
                </div>
                <div className='nav-item'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Footer</li>
                    </ul>
                    <button className='sign-out-btn'>Sign-out</button>
                </div>
            </div>
        </nav>
);
};

export default Navbar;