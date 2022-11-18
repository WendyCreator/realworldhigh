import Link from 'next/link'
import React from 'react'
import Layouts from '../../Components/Layouts'


const Index = () => {
  return (
    <>
         <div className='sidebar h-sreen bg-purple-50 w-3/4'>
          <h1 className='text-5xl text-center font-bold'>Main Dashboard!</h1>
          <main className='w-full'>
        <h1 className='font-bold text-center text-2xl m-3'>
          Student Result Calculator
        </h1>

        <p className='p-3 text-2xl text-center'>
          Welcome to the real world!{' '}
          
        </p>

        <div className='flex flex-wrap justify-center'>
          <a className={`w-1/3 h-36 block p-4 m-2 text-xl shadow-sm hover:shadow-lg`}>
            <h2>Check Result</h2>
            <p>You can Check different Student results</p>
          </a>

          <a className={`w-1/3 h-36 block p-4 m-2 text-xl shadow-sm hover:shadow-lg`}>
            <h2>Report Student</h2>
            {/* <p>You can report student's activities</p> */}
          </a>

          <a
            className={`w-1/3 h-36 block p-4 m-2 text-xl shadow-sm hover:shadow-lg`}
          >
            <h2>Calculate CGPA</h2>
            <p>You can calculate student Cummlative Grade Point</p>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`w-1/3 h-36 block p-4 m-2 text-xl shadow-sm hover:shadow-lg`}
          >
            {/* &rarr; */}
            <h2>Send Result </h2>
            {/* <p>
              You can send Student results to student's guardian
            </p> */}
          </a>


        </div>
        <Link href='/' className='bg-gray-400 p-3 rounded shadow-sm text-bold mx-auto block w-1/6 text-center my-3'>Logout</Link>

      </main>
         </div>
        
    </>
  )
}

export default Index

Index.getLayout = (pages)=>{
  return(
   <Layouts>
   {pages}
 </Layouts>
  )
   }