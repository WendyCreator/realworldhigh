import React, { useState } from 'react'
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'next/router'

const Index = () => {
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = (e)=>{
   e.preventDefault();
   const formData = new FormData(e.target);
   if(formData.get('email') == '' || formData.get('password') == ''){
     setError(true)
    return;
   }
   const email = formData.get('email')
   const password = formData.get('password')
   signInWithEmailAndPassword(auth,email,password)
   .then(userCredential=>{
    const user = userCredential.user;
    // console.log(user)
    router.push('/dashboard/')

    setError(false)
   })
   .catch(error =>{
    const errcode = error.code;
    const errmsg = error.message;
    setError(true)
    console.log(errcode)
    console.log(errmsg)
   })

  }
  return (
    <>
        <div className='flex justify-center flex-col item-center h-screen bg-gray-200 w-full p-10'>
        <h1 className='text-5xl text-center font-bold'>Real World High School</h1>
          <form className='w-1/3 bg-white h-3/4 mt-10 shadow-lg mx-auto' onSubmit={handleSubmit}>
          <h1 className='text-3xl text-center mt-4'>User Login</h1>
            <div className='flex flex-col w-4/5 m-auto'>
                <label htmlFor='email'>Email:</label>
                <input type={`email`} name='email'id='email' className='bg-white p-2 shadow-sm focus:outline-none border my-3' />
            </div>
            <div className='flex flex-col w-4/5 m-auto'>
                <label htmlFor='password'>Password:</label>
                <input type={`password`} name='password' id='password' className='bg-white p-2 shadow-sm focus:outline-none border my-3' />
            </div>
            <div className='flex flex-col w-4/5 m-auto'>
                <input type={`submit`} name='submit' id='submit' className='bg-purple-500 text-white font-bold p-2 shadow-sm focus:outline-none border my-3' />
            </div>
            <div className='flex flex-col w-4/5 m-auto mt-4'>
              {error && (<span className='block my-5 bg-red-100 p-2 text-red-500 rounded'>Invalid Login detail</span>)}
              
               <p>Provide the adequate information to login to the dashboard</p>
            </div>
          </form>
        </div>
    </>
  )
}

export default Index
