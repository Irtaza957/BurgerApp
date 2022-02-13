import React, { useContext, useState } from 'react'
import './Navigationitems.css'
import Navigationitem from './Navigationitem/Navigationitem'
import { logoutButton ,userName } from '../../../../Authentication'
import BackdropNav from './BackdropNav'
const NavigationItems = () => {
    const logout=useContext(logoutButton)
    const name=useContext(userName)
    const [backdropHide,setbackdropHide]=useState(false)
    const [Hide,setHide]=useState(false)
    const handlerHide=()=>{
       
        setbackdropHide(true)
        if(Hide){
            setHide(false)
        }
        else{
            setHide(true)
        }   
    }
    const click="userName dropdown-toggle"
    const clicked="logoutClick dropdown-toggle"
    return (
        <div >
             <BackdropNav backdropHide={backdropHide} setBackdropHide={setbackdropHide} logoutHide={setHide}/>
            <ul className="Navigationitems">
         <Navigationitem link="/">Burger Builder</Navigationitem>
         <Navigationitem link="/orders">Orders</Navigationitem>
       <div class="dropdown">
  <button onClick={handlerHide} class={Hide?clicked:click}>
  {name}
  </button>
 
  {Hide?<p onClick={logout} className="logout">Logout</p>:null}
</div>
            </ul>
            
        </div>
    )
}

export default NavigationItems
