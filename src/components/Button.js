import React from 'react'

const Button = (props) => {
    return (
        <button style={props.theme}>{props.name}</button>
    )
}

export default Button