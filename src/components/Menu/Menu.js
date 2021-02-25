
import React from 'react';
import "./_menu.scss";


const Menu = () => {
    return (
        <nav className="head__nav">
            <ul>
                <li><a className="head__nav--item" href="#">Home</a></li>
                <li><a className="head__nav--item" href="#">About</a></li>
                <li><a className="head__nav--item" href="#">Your account</a></li>
                <li><a className="head__nav--item" href="#">Contact us</a></li>
            </ul>
        </nav>
    );
}
export default Menu;
