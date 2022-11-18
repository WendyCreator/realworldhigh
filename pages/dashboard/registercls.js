import Link from 'next/link'
import React from 'react'
import Layouts from '../../Components/Layouts'
import {motion} from 'framer-motion'


const Registercls = () => {
  return (
    <>
         <motion.div className='sidebar h-sreen bg-purple-50 w-3/4'
         initial={{opacity:0, x: 100}}
         animate={{opacity:1, x: 0}}
         transition={{duration:1}}
         >
          <h1 className='text-5xl text-center font-bold'>Register Class</h1>
         </motion.div>
        
    </>
  )
}

export default Registercls

Registercls.getLayout = (pages)=>{
    return(
     <Layouts>
     {pages}
   </Layouts>
    )
     }