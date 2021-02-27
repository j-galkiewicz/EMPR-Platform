
import React from 'react';

const Menu = () => {
    return (
        <nav className="head__nav">
            <ul>
                <li><a className="head__nav--item" href="/home">Home</a></li>
                <li><a className="head__nav--item" href="/about">About</a></li>
                <li><a className="head__nav--item" href="/yourAccount">Your account</a></li>
                <li><a className="head__nav--item" href="/contactUs">Contact us</a></li>
            </ul>
        </nav>
    );
}
export default Menu;
