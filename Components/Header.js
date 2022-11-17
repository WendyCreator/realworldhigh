import React, { useState } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Header = () => {
  const [hide, setHide] = useState(false)
  const vary = {
    visible:{opacity:1, y:0},
    hidden:{opacity:0, y:50}
  }
  const setit = ()=>{
    setHide(prev=>!prev)
  }
  return (
    <div  className='text-center flex font-latoBold mb-2 bg-white p-10 shadow-sm justify-evenly space-x-24'>
        <motion.h1 className='text-5xl' animate={hide?'hidden':'visible'} variants={vary} transition={{duration:1.5}}>REALWORLD HIGH SCHOOL</motion.h1>
        <button className='border border-gray-200 rounded-lg p-4 bg-slate-600 text-white' onClick={setit}>Hide Text</button>

        <Link href='/' className='border border-gray-200 rounded-lg p-4 '>Back to home</Link>

        </div>
  )
}

export default Header