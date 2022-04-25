import React,{ useContext} from 'react'
import './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import { alertBanner,setAlertBanner } from '../../../Authentication'

const Burger = (props) => {
    //transformation codes
   // that is used to convert object(ingredients) into an array
   //"keys" returns array of ingredients
    let transformIngredients=Object.keys(props.ingredient)
    //"igKey" is argument that represents keys like 'salad','cheese'
    .map(igKey=>{
        //creating array for ingredient which has more than 2 values, means 'Cheese: 2,salad: 3'.
        // If ingredients is used 2 or more than 2 times, then create array for that ingredient
        return [...Array(props.ingredient[igKey])].map((_,i)=>{
            //"_" shows blank space(first argument), "i"  shows index of element(1,2,3 so on)
            return <BurgerIngredients key={igKey + i} type={igKey}/>
        })
    })
    //reduce function has 2 arguments. 1 argument shows previous value and 2 shows current value
    .reduce((arr,el)=>{
        //  console.log(el)
        return arr.concat(el)
    },[])
    if(transformIngredients.length===0){
        transformIngredients=<p className='BurgerText'>Please start adding ingredients!</p>
    }
    const alert=useContext(alertBanner)
    const setAlert=useContext(setAlertBanner)
    const alertClose=()=>{
        setAlert(false)
    }
  
    return (
       
        <div className="Burger">
            
         { alert?(
                <>
<div className='alert alert-warning alert-dismissible fade show' role="alert">
<div><strong>Congratulation!</strong> Your order placed successfully</div>
<div onClick={alertClose} className="closeButton" >X</div>
</div>
</>
            ):null
        }
            <BurgerIngredients type="bread-top"/>
            {transformIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default Burger
