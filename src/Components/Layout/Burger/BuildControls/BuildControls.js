import React, { useState,useContext } from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const BuildControls = (props) => {
  
    const [control,setControl]=useState([
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
    ])
    return (
        <div className="BuildControls">
            <p>Current Price: <strong> {props.price.toFixed(2)}</strong></p>
            {control.map(ctrl=>(
                <BuildControl 
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                key={ctrl.label} 
                label={ctrl.label}/>
            ))}
            <button className="OrderButton" 
            disabled={!props.purchase}
            onClick={props.ordered}>
                ORDER NOW
                </button>
        </div>
    )
}

export default BuildControls
