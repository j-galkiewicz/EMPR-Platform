import React from 'react';
import { Link } from "react-router-dom";

const About = props => {
    return (
        <div
             className={props.className}
            type={props.type}>
            <Link to="/about">{props.name}</Link>
            <p>About section</p>
        </div>
    );
}
export default About;