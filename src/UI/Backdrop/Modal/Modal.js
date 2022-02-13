import React from 'react'
import './Modal.css'
import Auxiliary from "../../../hoc/Auxiliary"
import Backdrop from '../Backdrop'
const Modal = (props) => {
    return (
        <Auxiliary>
            <Backdrop 
            show={props.show}
            clicked={props.modalClosed}
            />
        <div className="Modal" style={{transform: props.show? 
            'translateY(0)': 'translateY(-100)', 
            opacity: props.show ? '1':'0',
            zIndex: props.show? '500':'-2'}}>
            {props.children}
        </div>
        </Auxiliary>
    )
}

export default Modal
