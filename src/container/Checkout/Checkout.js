import React, { useState , useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import CheckoutSummary from '../../Components/Layout/Burger/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { Route } from 'react-router-dom';
const Checkout = (props) => {
    const [ingredients,setIngredients]=useState(1)
    const [price,setPrice]=useState(0)
//for dynamic ingredients of burger which were selected in checkout
useEffect(() => {
    const query=new URLSearchParams(props.location.search)
    const ingredient={}
    let price=0
    for(let param of query.entries()){
        //['salad','1']
        if(param[0]==='price'){
            price=param[1]
        }
        else{
            ingredient[param[0]]=+param[1]
        }
    }
    setIngredients(ingredient) 
    setPrice(price)
},[])

const history=useHistory()
function CheckoutCancelHandler() {
     history.push('/')
}
function CheckoutContinuedHandler(){
    history.replace('/checkout/contact-data')
}

    return (
        <div>
            <CheckoutSummary 
            ingredients={ingredients}
            CheckoutCancelled={CheckoutCancelHandler}
            CheckoutContinued={CheckoutContinuedHandler}
            />
             <Route 
             path={props.match.path + '/contact-data'}
             render={()=>(<ContactData price={price} ingredients={ingredients}/>)}
             />
        </div>
    )
}

export default Checkout
