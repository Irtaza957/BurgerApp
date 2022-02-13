import React, {  useContext, useState } from 'react'
import './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../UI/Spinner/Spinner'
import Input from '../../../UI/Input/Input'
import { useHistory } from 'react-router-dom'
import { setAlertBanner } from '../../../Authentication'
const ContactData = (props) => {
    const history=useHistory()
    const setAlert=useContext(setAlertBanner)
    const [contact,setContact]=useState({
      name:{
        elementType: 'input',
        elementConfig:{
          type:'text',
          placeholder:'Your Name'
        },
        value:'',
        validation:{
          required: true
        },
        valid: false,
        touched: false
      },
      street:{
        elementType: 'input',
        elementConfig:{
          type:'text',
          placeholder:'Street'
        },
        value:'',
        validation:{
          required: true
        },
        valid: false,
        touched: false
      },
      ZipCode:{
        elementType: 'input',
        elementConfig:{
          type:'text',
          placeholder:'ZIP Code'
        },
        value:'',
        validation:{
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country:{
        elementType: 'input',
        elementConfig:{
          type:'text',
          placeholder:'Country'
        },
        value:'',
        validation:{
          required: true
        },
        valid: false,
        touched: false
      },
      email:{
        elementType: 'input',
        elementConfig:{
          type:'text',
          placeholder:'Your E-Mail'
        },
        value:'',
        validation:{
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod:{
        elementType: 'select',
        elementConfig:{
          options:[
            {value:'fastest', displayValue:'Fastest'},
            {value:'cheapest', displayValue:'Cheapest'}
          ]
        },
        value:'',
        valid:true,
        validation: {}
      },
    })
    const [formIsValid,setformIsValid]=useState(false)
    const [loading,setLoading]=useState(false)
    //click to send order to databse
function OrderHandler(event){
        event.preventDefault()
        const formData={}
        for(let formElementIdentifier in contact){
          formData[formElementIdentifier]=contact[formElementIdentifier].value
    
        }
            setLoading(true)
            // console.log(formData)       
    //what we send to firebase database
    const order={
      ingredient: props.ingredients,
       price: props.price,
       orderData: formData
  }
axios.post('/orders.json',order)
.then(response=>{
setAlert(true)
  setLoading(false)
 
history.push('/')
})
.catch(error=>{
  setLoading(false)

})
    }
    //converting obj into array of contact
    let formElementArray=[]
    for(let key in contact){
      formElementArray.push({
        id:key,
        config: contact[key]
      })
    }
// console.log(formElementArray)
    function CHeckValidity(value,rules){
      let isValid=true
      if(!rules){
        return true
      }
      if(rules.required){
        isValid=value.trim()!=="" && isValid
      }
      if(rules.minLength){
        isValid=value.length >= rules.minLength && isValid
      }
      if(rules.maxLength){
        isValid=value.length <= rules.maxLength && isValid
      }
      return isValid
    }

    function InputChanged(event,inputIdentifier) {
      //copying contact to updated contact
      const updatedContact={
        ...contact
      }
      //inputIdentifier=> shows which input field changed(key)
      const updatedFormElement={
        ...updatedContact[inputIdentifier]
      }
      updatedFormElement.value=event.target.value
      updatedFormElement.valid=CHeckValidity(updatedFormElement.value,updatedFormElement.validation)
      updatedFormElement.touched=true

      updatedContact[inputIdentifier]=updatedFormElement
//for disable button
      let formisvalid=true
      for(let inputIdentifier in updatedContact){
        formisvalid=updatedContact[inputIdentifier].valid && formisvalid
      }
      setContact(updatedContact)
      setformIsValid(formisvalid)
    }
   //dynamically adding form inputs
    let form=(
         <form onSubmit={OrderHandler}>
           {formElementArray.map(formElement=>(
            <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
             value={formElement.config.value} 
             invalid={!formElement.config.valid}
             shouldValidate={formElement.config.validation}
             touched={formElement.config.touched}
             changed={(event)=>InputChanged(event,formElement.id)}
             />
           ))}
        <button type="submit" className="Button Success" onClick={OrderHandler} disabled={!formIsValid}> Order</button>
    </form>
    )
    if(loading){
        form=<Spinner/>
    }
    return (
        <div className="ContactData">
             <h4>Enter your Contact Data</h4>
            {form}
        </div>
    )
}

export default ContactData
