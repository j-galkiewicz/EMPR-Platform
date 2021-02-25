import React from 'react'
import { Link } from "react-router-dom";

const Button = props => {
    return (
        <button
            className={props.className}
            type={props.type}>
            <Link to="/login">{props.name}</Link>
            {/* {props.name} */}
        </button>
    )
}

export default Button

