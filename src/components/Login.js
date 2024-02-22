import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase";

const Login = () => {
  const[isSignInForm, setSignInForm]=useState(true);
  const[errorMessage,setErrorMessgae]=useState(null);

  const email=useRef(null);
  const Password=useRef(null);

  const handleButtonClick=()=>{
    //check validation
  
    console.log(email.current.value);
    console.log(Password.current.value)
    const message=checkValidData(email.current.value,Password.current.value);
    //  console.log(message);
     setErrorMessgae(message);

     if(message) return;
     if(!isSignInForm){
      //sign up
      createUserWithEmailAndPassword(auth,email.current.value,Password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+"-"+errorMessage);
      });
     }
     else{
      //sign in
      signInWithEmailAndPassword(auth,email.current.value,Password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+"-"+errorMessage);
      });
     }
  }
  const toggleSignUpForm=()=>{
      setSignInForm(!isSignInForm);
  }
  return (
   <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background'/>
        </div>
        <form  onSubmit={(e)=>e.preventDefault()}className='absolute w-3/12 p-6 bg-black shadow-lg rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-opacity-70'>
          <h1 className='font-bold text-2xl mb-4 text-center'>{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm && <input type='text' placeholder='userName' className='block w-full px-3 py-2 mb-4 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-500'></input>}
          <input ref={email} type='text' placeholder='Email Address' className='block w-full px-3 py-2 mb-4 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-500'></input>
          <input ref={Password} type='password' placeholder='Password' className='block w-full px-3 py-2 mb-4 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-500'></input>
          <p className='text-red-600 font-bold text-xl p-2 m-2'>{errorMessage}</p>
          <button className='block w-full px-4 py-2 bg-red-700 hover:bg-red-600 text-white font-semibold rounded-md focus:outline-none focus:bg-red-600' onClick={handleButtonClick}>{isSignInForm?"Sign In": "Sign Up"}</button>
          <p className='p-2 m-2 font-bold cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm?"New to Netflix? Sign UP Now":"New to Netflix? Sign In Now"}</p>
        </form>


   </div>
    
    
  )
};

export default Login