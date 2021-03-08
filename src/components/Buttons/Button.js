import React from 'react'
import { Link } from "react-router-dom";

const Button = props => {
    return (
        <button
            className={props.className}
            type={props.type}>
            {props.redirect !== " " && props.redirect !== undefined ? <Link to={props.link}>{props.name}</Link> : props.name}
            {/* {props.name} */}
        </button>
    )
}

export default Button

