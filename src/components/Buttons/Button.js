import React from 'react'
import { Link } from "react-router-dom";

const Button = props => {
    return (
        <button
            className={props.className}
            type={props.type}
        >
            {(props.link !== '' && props.link !== undefined) ? <Link to={props.link}>{props.name}</Link> : props.name}
        </button>
    )
}

export default Button
