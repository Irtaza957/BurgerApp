import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigationitem.css'
const Navigationitem = (props) => {
    return (
        <div > 
            <ul>
                <li className="Navigationitem">
                    <NavLink to={props.link} exact >
                    {props.children}
                    </NavLink>
                </li>
            </ul>
  
        </div>
    )
}
export default Navigationitem
