import React from 'react'
import './Button.css'
const OrderSummary = (props) => {
    //transforming objects into an array and mapping to get all ingredients with added ingredient's value 
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>{
        return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
            </li>
        )
    })
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
{ingredientSummary}
            </ul>
            <p> <strong>Total Price: {props.price.toFixed(2)}</strong> </p>
            <p>Continue to Checkout?</p>
            <div className='summaryButton'>
            <button className="Button" style={{color: "#944317"}}
             onClick={props.purchaseCancelled}>CANCEL</button>

            <button className="Button Success" 
            onClick={props.purchaseContinued}>CONTINUE</button>
            </div>
        </div>
    )
}

export default OrderSummary
