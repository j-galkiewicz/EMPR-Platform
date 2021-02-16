import React from 'react'

const types = {
    "success": "blue",
    "error": "red",
    "submit": "lightblue",
}

const Button = props => {
    return (
        <button className="buttonLogIn">{props.name}
        </button>

    );
}

export default Button;