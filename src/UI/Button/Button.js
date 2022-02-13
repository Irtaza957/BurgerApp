import React from 'react'
const Button = (props) => {
    return (
        <div onClick={props.clicked} >
            {props.children}
        </div>
    )
}

export default Button
