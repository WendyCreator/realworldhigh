import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Layouts from '../Components/Layouts'
import {useRouter} from 'next/router'



const Pagenotfound = () => {
    const router = useRouter();
    // const [time, setTime] = useState(5)

    const goHome = ()=>{
        router.push('/')
     
    }

    useEffect(
       ()=>{
        setTimeout(goHome, 5000) 
       }
    )

  return (
    <>
         <div className='sidebar h-sreen bg-purple-50 w-full p-10 item-center flex flex-col justify-center'>
          <h1 className='text-5xl text-center font-bold'>Page not Found!</h1>
          <Link href='/' className='border border-gray-200 rounded-lg p-4 mx-auto block w-1/4 text-center mt-4 bg-purple-900 text-white'>Back to home</Link>
         
         </div>
        
    </>
  )
}

export default Pagenotfound

// pagenotfound.getLayout = (pages)=>{
//     return(
//      <Layouts>
//      {pages}
//    </Layouts>
//     )
//      }