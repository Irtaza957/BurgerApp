import React from 'react'
import './Input.css'
const Input = (props) => {
    let inputElement=null
    const inputClass=["InputElement"]
    if(props.invalid && props.shouldValidate && props.touched){
        inputClass.push("Invalid")
    }
    switch(props.elementType){
        case('input'):
        inputElement=<input
        onChange={props.changed}
         {...props.elementConfig} 
         value={props.value}
        className={inputClass.join(' ')}/>
        break;
        case('textarea'):
        inputElement=<textarea
        onChange={props.changed}
         {...props.elementConfig} 
         value={props.value}
         className={inputClass}/>
        break;
        case('select'):
        inputElement=(
        <select
        onChange={props.changed}
         value={props.value}
         className={inputClass}>
             {props.elementConfig.options.map(option=>(
                 <option 
                 key={option.value} 
                 value={option.value}>
                     {option.displayValue}
                 </option>
             ))}
         </select>
        )
        break;
        default:
            inputElement=<input 
            {...props.elementConfig} 
            className="InputElement"/>
    }
   
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input
