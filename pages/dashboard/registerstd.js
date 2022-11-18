import Link from 'next/link'
// import React from 'react'
import Layouts from '../../Components/Layouts'
import {motion} from 'framer-motion'
import InputField from '../../Components/InputField'
import SelectClass from '../../Components/SelectClass'
import Course from '../../Components/Course'
import React, { useState } from 'react'
import axios from 'axios'
// import { json } from 'express'




const Registerstd = (props) => {
  const allCourses = ['Mathematics', 'English Languange', 'Physics', 'Chemistry', 'Biology']

  const [message, setMessage] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState([])
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target)
    const config = {
      headers:{'Content-Type': 'multipart-form-data'}
   }
  //  console.log(selectedCourse) 

  //  fetch('/api/server',{
  //   method:'POST',
  //   config,
  //   body: formData
  // })
  // .then(()=>{
  //   console.log(formData)
  // })
  const realFormData = Object.fromEntries(formData)
 
  axios.post('/api/server', realFormData, config)
  .then(()=>{
    setMessage(true)
  //  console.log(props.data)
  setTimeout(() => {
    setMessage(false)
  }, 1000);
  })

  }

  
  return (
    <>
         <motion.div className='sidebar h-sreen bg-purple-50 w-3/4'
         initial={{opacity:0, x: 100}}
         animate={{opacity:1, x: 0}}
         transition={{duration:1}}
         >
          <h1 className='text-5xl text-center font-bold w-full'>Register Students</h1>
         { message && <span className='ml-24 bg-green-200 text-green-500 my-4 block p-2 w-3/4'>Student Registered Successfully!</span>}
          <form onSubmit={handleSubmit}>
          <InputField inputId = 'firstname' inputType = 'text' labelName= 'First Name:'  name="firstname" change={'change'}   />
          <InputField inputId = 'lastname' inputType = 'text' labelName= 'Last Name:'  name="lastname" change={'change'}    />
          <InputField inputId = 'regnum' inputType = 'text' labelName= 'Registration Number:'  name="studentid"  />
          <SelectClass labelName = {'Student Class'}/>
          
           
           <div className='flex ml-24 w-3/4'>
            <input  type={`submit`} className='bg-purple-600 text-purple-200 block w-full mt-4 p-4 rounded-sm text-xl hover:bg-purple-800'/>
           </div>
          
          </form>
          <h3 className='flex ml-24 bg-gray-100 w-3/4 text-center p-3 font-bold'>Select Courses you wish to offer</h3>
           <div className='flex ml-24 bg-gray-100 w-3/4'>
            {
            
             allCourses.map(course=>{
              return(
                <Course label = {course} setSelectedCourse={setSelectedCourse} selectedCourse={selectedCourse} key={course}/>
              )
            })
          }
           </div>
         </motion.div>
        
    </>
  )
}

export default Registerstd

Registerstd.getLayout = (pages)=>{
    return(
     <Layouts>
     {pages}
   </Layouts>
    )
     }

    //  export async function getStaticProps(){

    //   const data = await axios.get('http://localhost:3000/api/server')
    //   return{
    //     props:{
    //       data
    //     }
    //   }

    //  }

    
   