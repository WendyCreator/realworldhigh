import Link from 'next/link'
import React, { useState } from 'react'
import Layouts from '../../Components/Layouts'
import {motion} from 'framer-motion'
import Select from '../../Components/Select'
import studentdata from '../../database/studentdata'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())
const viewcls = () => {

  const [students, setStudents] = useState([])
  let num = 1

  const { data, error } = useSWR('/api/getData', fetcher)


  const settingStd = (e)=>{
    if(e.target.value !== 'All'){
      const filterStds = data.filter((stds)=>{
        return e.target.value == stds.studentclass 
       })
       setStudents(filterStds)
    }else{
      setStudents(data)
    }
   
    
  }


  const getStudents = ()=>{
    setStudents(data)
  }

  return (
    <>
          <motion.div className='sidebar h-sreen bg-purple-50 w-3/4'
         initial={{opacity:0, x: 100}}
         animate={{opacity:1, x: 0}}
         transition={{duration:1}}
         >
          <h1 className='text-5xl text-center font-bold'>View Class</h1>
          <Select settingStd = {settingStd} labelName={'Filter By Class:'}/>
          <button className='mx-auto block rounded bg-gray-500 p-4 w-1/2 text-white' onClick={getStudents}>Load data</button>
          <table className='table-auto table border'>
            <thead>
                <tr className='border hover:bg-purple-800 bg-purple-600 text-purple-50'>
                    <th>#</th>
                    <th>Studentid</th>
                    <th>Full Name:</th>
                    <th>Class:</th>
                    {/* <th>Grade:</th> */}
                    <th>Checkout</th>
                </tr>
            </thead>
            <tbody>
             {students.length ? ( students.map((data,index)=>{
                return (
                  <tr className='hover:bg-purple-200' key={index}>
                    <td>{num++}</td>
                    <td>{`00${data.studentid}`}</td>
                    <td>{`${data.firstname} ${data.lastname}`}</td>
                    <td>{data.studentclass}</td>
                    {/* <td>
                      
                      <span className={`p-2 m-3 bg-purple-300`} >A</span>
                    </td> */}
                    <td>
                      <Link href={'#'} className='border px-5 py-2 rounded-sm bg-purple-100'>Checkout</Link>
                    </td>
                </tr>
                )
              }) ) : (<tr><td>Please Load data...</td></tr>)}
               
            </tbody>
          </table>
      
         </motion.div>
        
    </>
  )
}

export default viewcls

viewcls.getLayout = (pages)=>{
    return(
     <Layouts>
     {pages}
   </Layouts>
    )
     }