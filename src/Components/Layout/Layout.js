import React, { useState } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Toolbar from './Navigation/Toolbar/Toolbar'
import './Layout.css'
import Sidedrawer from '../Sidedrawer/Sidedrawer'
const Layout = (props) => {
    const [hide,setHide]=useState(false)
    function sideDrawer(){
         setHide((prevState)=>{
             return !hide
         })
    }
   return (
   <Auxiliary >
       <Sidedrawer
         closed={hide} 
        opened={sideDrawer}
        />
    <div>
        <Toolbar 
        closed={hide}
        opened={sideDrawer}/>
    </div>
    <main className="Content">
        {props.children}
    </main>
    </Auxiliary>
   )}

export default Layout
