import React from 'react'

const BackdropNav = (props) => {

     const logoutHide=()=>{
         props.logoutHide(false)
         props.setBackdropHide(false)
     }
    return (
     props.backdropHide?(
        <div  onClick={logoutHide} style={{   width: '100%',
        height: '100%',
        position: 'fixed',
      zIndex:'-2',
        left: '0',
        top:'0',
        backgroundColor: 'transparent'}}>
    
    </div>
     ):null
       
    )
}

export default BackdropNav