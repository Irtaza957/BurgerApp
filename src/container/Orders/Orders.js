import React, { useEffect, useState } from 'react'
import Order from '../../Components/Layout/Burger/Order/CheckoutSummary/Order'
import axios from '../../axios-orders'
import Spinner from '../../UI/Spinner/Spinner'
import './Orders.css'
import { NavLink } from 'react-router-dom'
const Orders = () => {
    const [orders,setOrders]=useState([])
    const [loading,setLoading]=useState(true)
   
    useEffect(()=>{
        axios.get('/orders.json')
        .then(res=>{
            setLoading(false)
            const fetchOrders=[]
            for(let key in res.data){
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                })
            }  
setOrders(fetchOrders)
        })
        .catch(err=>{
            setLoading(false)
        })
    },[])
// console.log(orders)
    let order= null
    let orderLength=null
    if(orders.length){
       orderLength=(
        order=orders.map(order=>(
            <Order 
            length={orders.length}
            key={order.id}
            ingredients={order.ingredient}
            price={order.price}
            />)
            )
       )
    }
    else{
        orderLength=(
        <div className='NoOrder'>
        <div>No order yet</div>
       <NavLink to='/'><button className='NoOrderButton'>Order Now</button></NavLink> 
        </div>
        )
    }

        if(loading){
            order= <Spinner/>
         }
         else{
         order=orderLength
         }
    return (
        <div>  
        {order}
        </div>
    )
}

export default Orders
