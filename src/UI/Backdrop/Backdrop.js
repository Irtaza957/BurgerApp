import React from 'react'
import './Backdrop.css'
const Backdrop = (props) => {
    // console.log(props.clicked)
    return (
        props.show ?
        <div onClick={props.clicked} className="Backdrop">
          
        </div>:null
    )
}

export default Backdrop
