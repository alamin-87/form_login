import React, { useState } from 'react'
import './Login.css'
import bg from '../../assets/bg.png'
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link } from 'react-router-dom';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";





const Login = () => {
   // ------------variable part start----------------
 const [email , setemail] =useState('')
 const [password , setpassword] =useState('')
 const [emailError  , setemailError] =useState('')
 const [passwordError , setpasswordError] =useState('')
 const [show , setshow] = useState(false)
   //  ---------------function part start-----------------
   const handelEmail=(e)=>{
      setemail(e.target.value)
   }
   const handelPassword=(e)=>{
      setpassword(e.target.value)
     
   }
   const handelSubmit=(e)=>{
      e.preventDefault()
      if(email==''){
         setemailError('Enter Your Email')
      }
      if(password==''){
         setpasswordError('Enter Your Password')
      }
     
   }

   const handelshow=()=>{
      setshow(!show)
     
   }
  


  return (
    <> <div className="login_section bg-cover bg-no-repeat bg-center w-full h-full py-[250px]" style={{backgroundImage:`url(${bg})`}}>
        <div className="container">
            <div className="login_row">
               <div className="login_row1">
                <h2>Create an account</h2>
                 <div className="link">
                 <div className="link1">
                   <a href="/"> <FcGoogle /></a>
                   <a href="/"> <h3>Google </h3></a>
                 </div>
                 <div className="link1">
                    <a href="/"><SiFacebook className='icon'/></a>
                    <a href="/"><h3> Facebook </h3></a>
                 </div>
                 </div>
                <p>Or</p>
               </div>
               <form onSubmit={handelSubmit}  className="login_row2">
                    <h2>Email</h2>
                    <input onChange={handelEmail} type="text" placeholder='balamia@gmail.com' />
                    <p className=' absolute top-[56px] md:top-[66px] lg:top-[82px] text-[10px] lg:text-[12px] font-popin text-red-600 text-sm'>{emailError}</p>
                    <h2>Password <span>Forgot?</span></h2>
                    <input onChange={handelPassword} type={show?'text':'password'} placeholder='Enter your password' />
                    {
                     show? 
                     <LuEye onClick={handelshow} className='eye'/>
                     : 
                     <LuEyeOff onClick={handelshow} className='eye' />
                    }
                    <p className=' absolute top-[131px] md:top-[149px] lg:top-[182px] text-[10px] lg:text-[12px] font-popin text-red-600 text-sm mt-[5px]'>{passwordError}</p>
                  <button type='submit' onSubmit={handelSubmit}>Create account</button>
               </form>
               <div className="input_last_text">
                    <p>Already have an account ?</p>
                    <span><a href="/">Log In</a></span>
                  </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login