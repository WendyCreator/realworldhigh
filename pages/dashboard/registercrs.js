import Link from 'next/link'
import React from 'react'
import Layouts from '../../Components/Layouts'
import {motion} from 'framer-motion'
import InputField from '../../Components/InputField'




const Registercrs = () => {
  return (
    <>
          <motion.div className='sidebar h-sreen bg-purple-50 w-3/4'
         initial={{opacity:0, x: 100}}
         animate={{opacity:1, x: 0}}
         transition={{duration:1}}
         >
          <h1 className='text-5xl text-center font-bold'>Register Course</h1>
          <form>
          <InputField inputId = 'title' inputType = 'text' labelName= 'Course Title:'  name="title" change={'change'}   />
          <InputField inputId = 'teacher' inputType = 'text' labelName= 'Course Teacher:'  name="teacher" change={'change'}   />
          <InputField inputId = 'cid' inputType = 'text' labelName= 'Course ID:'  name="cid" change={'change'}   />
          <div className='flex ml-24 w-3/4'>
            <input  type={`submit`} className='bg-purple-600 text-purple-200 block w-full mt-4 p-4 rounded-sm text-xl hover:bg-purple-800' value={`Register Course`}/>
           </div>
          </form>
         </motion.div>
        
    </>
  )
}

export default Registercrs

Registercrs.getLayout = (pages)=>{
  return(
   <Layouts>
   {pages}
 </Layouts>
  )
   }