import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItems from '../Layout/Navigation/NavigatioItems/NavigationItems'
import './Sidedrawer.css'
import Auxiliary from '../../hoc/Auxiliary'
import Backdrop from "../../UI/Backdrop/Backdrop"
const Sidedrawer = (props) => {
    
    return (
        <Auxiliary>
            <Backdrop show={props.closed} clicked={props.opened}/>
        <div className={props.closed?"Sidedrawer Open":"Sidedrawer Close"}>
            <div className="logo">
            <Logo/>
            </div>
            <nav>
            <NavigationItems/>
            </nav>
        </div>
        </Auxiliary>
    )
}

export default Sidedrawer
