import React from 'react'

const types = {
    "success": "blue",
    "error": "red",
}

const Button = props => {
    return (
        <button className="buttonLogIn"
            style={{
                backgroundColor: types[props.type]
            }}
        >{props.name}
        </button>

    );
}

export default Button;