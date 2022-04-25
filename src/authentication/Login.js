import React from 'react'
import AuthSpinner from './AuthSpinner/AuthSpinner'
import './login.css'

const Login = (props) => {
    return (
        <>
        <div className='login'>
        <div className='loginContainer'> 
        <label>Username</label>
        <input
        type="text"
        required
        value={props.email}
        onChange={(e)=>props.setEmail(e.target.value)}
        />
        <p className='errorMsg'>{props.emailError}</p>
        <label>Password</label>
        <input
        type="password"
        required
        value={props.password}
        onChange={(e)=>props.setPassword(e.target.value)}
        />
        <p className='errorMsg'>{props.passwordError}</p>
        <div className="btnContainer">
            {props.hasAccount?(
                <>
               {props.load?(  <button onClick={props.handleLogin} className="LogButton">Sign In</button>):<AuthSpinner/>}
                <p>Don't have an account?<span onClick={()=>props.setHasAccount(!props.hasAccount)}>Sign up</span></p>
                </>
            ):(
                <>
               {props.load?( <button className="LogButton" onClick={props.handleSignup}>Sign up</button>):<AuthSpinner/>}
                <p>Have an account?<span onClick={()=>props.setHasAccount(!props.hasAccount)}>Sign in</span></p>
                </>
            )}
        </div> 
        </div>
       
        </div>
      
        </>
    )
}

export default Login
