import React, { createContext} from 'react'
import {  useState } from 'react';
import auth from './authentication/fire';
import { Route, Switch } from 'react-router-dom';
import Login from './authentication/Login';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import Orders from './container/Orders/Orders';

import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth"
import Spinner from './UI/Spinner/Spinner';
  const logoutButton=createContext()
  const userName=createContext()
  const alertBanner=createContext()
  const setAlertBanner=createContext()
const Authentication = () => {
  let [alert,setAlert]=useState(false)
    const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [emailError,setEmailError]=useState()
  const [passwordError,setPasswordError]=useState()
  const [hasAccount,sethasAccount]=useState(false)
  const [user,setUser]=useState("")
  const [load,setLoad]=useState(true)
  const [lod,setLod]=useState(false)

  const clearInputs=()=>{
    setEmail('')
    setPassword('')
  }

  const clearErrors=()=>{
    setEmailError('')
    setPasswordError('')
  }

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  
  })
  const Name=user?.email

  const register=async()=>{
    setLoad(false)
    clearErrors()
    const user=createUserWithEmailAndPassword(auth,email,password)
  .catch((err)=>{
    setLoad(true)
    switch(err.code){
      case "auth/email-already-in-use":
        setEmailError("*Email already in use")
        break
        case "auth/invalid-email":
            setEmailError("*Invalid Email")
            break
            case "auth/weak-password":
              setPasswordError("*Password should be atleast 6 characters")
              break
              default:
                setEmailError('')
    }
  })
  }
  
  const login=()=>{
    setLoad(false)
    clearErrors()
  const user=signInWithEmailAndPassword(auth,email,password)
  .catch((err)=>{
    setLoad(true)
    switch(err.code){
      case "auth/Invalid-email":
        setEmailError("*Invalid Email")
        break
        case "auth/user-disabled":
          setEmailError("*User is disabled")
          break
          case "auth/user-not-found":
            setEmailError("*User not found")
            break
            case "auth/wrong-password":
              setPasswordError("*Wrong password")
              break
              default:
                setEmailError('')
    }
  })
  }

  const logout=()=>{
     signOut(auth)
     setLoad(true)
     clearErrors()
     clearInputs()
  }

  
    return (
        <div>          
              {user?(
                
               <logoutButton.Provider value={logout}>
               <userName.Provider value={Name}>
                 <setAlertBanner.Provider value={setAlert}>
                   <alertBanner.Provider value={alert}>
           <Layout>
           <Switch>
                   <Route path="/" exact component={BurgerBuilder} />
                   <Route path="/checkout"  component={Checkout} />
                   <Route path="/orders"  component={Orders}/>
           </Switch>
       </Layout>
       </alertBanner.Provider>
      </setAlertBanner.Provider>
       </userName.Provider>
      </logoutButton.Provider>
      ):(
        <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignup={register}
        handleLogin={login}
        emailError={emailError}
        passwordError={passwordError}
        hasAccount={hasAccount}
        setHasAccount={sethasAccount}
        load={load}
        />
      )}
     
        </div>
    )
}

export default Authentication
export {logoutButton , userName, alertBanner, setAlertBanner}
