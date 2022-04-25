import React, { useState,useContext } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import { useHistory } from 'react-router-dom';
import Burger from '../../Components/Layout/Burger/Burger'
import BuildControls from '../../Components/Layout/Burger/BuildControls/BuildControls'
import Modal from '../../UI/Backdrop/Modal/Modal'
import OrderSummary from '../../Components/Layout/Burger/OrderSummary/OrderSummary'
import Spinner from '../../UI/Spinner/Spinner'
import { setAlertBanner } from '../../Authentication'
const BurgerBuilder = () => {
  const setAlert=useContext(setAlertBanner)
  const [price,setPrice]=useState({
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0
  })
  const [ingredient,setIngredient]=useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  })
  
  const [total,setTotal]=useState(4)
  const [purchaseable,setPurchaseable]=useState(false)
  const [purchasing,setPurchasing]=useState(false)
const [loading,setLoading]=useState(false)
  function purchaseHandler(){
setPurchasing(true)
setAlert(false)
  }

  function cancelPurchaseHandler(){
    setPurchasing(false)
  }

const history=useHistory()
//for checkout burger ingredients  (link)
const queryParams=[];
for(let i in ingredient){
 
  queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredient[i]))
  // encodeURIComponent(i) => salad etc
  //encodeURIComponent(ingredient[i]) 1,2 etc
  //console.log(encodeURIComponent(ingredient[i]))
}
queryParams.push('price=' + total)
//  console.log(queryParams[4])
//to add "&" among arrays
const queryString=queryParams.join('&')
//continue button
  function PurchaseContinueHandler(){
    history.push({
      pathname:'/checkout',
      search: '?' + queryString
    })
  }
//to enable ORDER button if ingredeint is added 
 function updatePurchaseState(ingredients){
const sum=Object.keys(ingredients)
.map(igKey=>{
  // console.log(ingredients[igKey])
  return ingredients[igKey]
  //ingredients[igKey] is values of ingredients
})
.reduce((sum,el)=>{
 
  return sum + el
},0)

if(sum>0){
  setPurchaseable(true)
}
  }
 function addIngredientHandler(type){
//increasing/decreasing burger ingredients on clicking more/less
const oldCount=ingredient[type]
// console.log(oldCount)
const updatedCount=oldCount+1
// console.log(updatedCount)
 const updatedIngredients={
   ...ingredient
 }
 updatedIngredients[type]=updatedCount
 const priceAddition=price[type]
 const oldPrice=total
 const newPrice=oldPrice+priceAddition
 setTotal(newPrice)
 setIngredient(updatedIngredients)
 updatePurchaseState(updatedIngredients)
  }
function removeIngredientHandler(type){
  const oldCount=ingredient[type]
  //to avoid error if length of array is negative
  if(oldCount<=0){
    return null
  }
  const updatedCount=oldCount-1
   const updatedIngredients={
     ...ingredient
   }
   updatedIngredients[type]=updatedCount
   const priceAddition=price[type]
   const oldPrice=total
   const newPrice=oldPrice-priceAddition
   setTotal(newPrice)
   setIngredient(updatedIngredients)
 
}
const disabledInfo={
  ...ingredient
}

for(let key in disabledInfo){
  //disabledInfo[key] is value of ingredients 
 disabledInfo[key]=disabledInfo[key]<=0
 console.log(disabledInfo)
}
//disabledInfo = {salad:true, meat: false, ....}. if ingredient's value is false then it will be disabled
let orderSummary=  <OrderSummary 
ingredients={ingredient}
purchaseCancelled={cancelPurchaseHandler}
purchaseContinued={PurchaseContinueHandler}
price={total}
/>
if(loading){
  orderSummary=<Spinner/>
}
    return (
        <Auxiliary>
          <Modal 
          show={purchasing}
          modalClosed={cancelPurchaseHandler}
          >
          {orderSummary}
          </Modal>
          <Burger ingredient={ingredient}/>
<BuildControls 
ingredientAdded={addIngredientHandler}
ingredientRemoved={removeIngredientHandler}
disabled={disabledInfo}
price={total}
purchase={purchaseable}
ordered={purchaseHandler }
/>
        </Auxiliary>
    )
}

export default BurgerBuilder
