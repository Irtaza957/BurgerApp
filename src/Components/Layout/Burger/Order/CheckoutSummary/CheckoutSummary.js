import React from 'react'
import Burger from '../../Burger'
import Button from '../../../../../UI/Button/Button'
import './CheckoutSummary.css'

const CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <div style={{backGroundColor: '#F08E4A'}} className='alertBurger' role="alert">
<div><strong>Dear customer,</strong> We hope it tastes well!</div>
</div>            
             <div style={{width: '100%'}}>
                <Burger ingredient={props.ingredients}/>
            </div> 
            <div  className="Button ">
            <Button
            btnType="Danger"
            clicked={props.CheckoutCancelled}
            ><span className="Success">Cancel</span></Button>
            <Button
            btnType="Success"
            clicked={props.CheckoutContinued}
            ><span className="Danger">Continue</span></Button>
            </div>
        </div>
    )
}

export default CheckoutSummary
