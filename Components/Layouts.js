import React from 'react'
import Header from './Header'
import Link from 'next/link'
import Sidebar from './Sidebar'
import {motion} from 'framer-motion'

const Layouts = ({children}) => {
  return (
    <div>
        <Header />
        <motion.div className='bg-white flex h-max w-full h-screen'
        initial={
          {
            opacity:1,
            y:100
          }
        }
        layout
        animate={{y:0}}
        transition={{duration:1}}
        >
            <Sidebar />
             {children}
        </motion.div>
    </div>
  )
}

export default Layouts