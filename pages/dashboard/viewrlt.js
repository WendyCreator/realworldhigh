import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Layouts from '../../Components/Layouts'
import {motion} from 'framer-motion'
import Select from '../../Components/Select'
import studentdata from '../../database/studentdata'
import useSWR from 'swr'




const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Viewrlt = () => {
  const { data, error } = useSWR('/api/getData', fetcher)

  const [theScore, setTheScore] = useState([])
  const [Score, setScore] = useState([])
  const [showScore, setShowScore] = useState([])
  const [item, setItem] = useState({})
  let num = 1;


  

  // useEffect(()=>{
  //   const position = [];
  //   theScore.forEach((score, id)=>{
  //    position.push(calculateScore(score.id))
  // })
  //  position.sort((a, b)=> b - a);
  //  setShowScore(position)
  // }, [])

 

  const calculateGrade = (id)=>{
    if(id){
      const theStudent = theScore.find((student)=>{
        return student.studentid === id
      })
      const studentGrade = Object.values(theStudent.subjects);
      const studentGradeFinal = studentGrade.flat(1)
      return (Math.ceil((studentGradeFinal.reduce((t,e)=>t+e, 0))/5))
      // return 0
    }else{
      return 0
    }
   
         
  }

  const calculateScore = (id)=>{
    if(id){
      const theStudent = theScore.find((student)=>{
        return student.studentid === id
      })
      const studentGrade = Object.values(theStudent.subjects);
      const studentGradeFinal = studentGrade.flat(1)
      return ((studentGradeFinal.reduce((t,e)=>t+e, 0)))
      // return studentGradeFinal[0]
    }else{
      return 0
    }
         
  }

 
  
  // const orderPosition1 = ()=>{
   
  //    }
  // useEffect(
  //   ()=>{
  //     theScore.forEach((std)=>{
  //       showScore.forEach(shh=>{
  //         setItem({...item, name:std.fullname, score:shh})
  //       })
  //   })},
  //    [theScore, showScore]
  // )

//     const orderPosition = () => {
//       const shownScore =  showScore.map(stdscore=>{
//         return {name:item.name,score:stdscore};
//        })
      
//        setScore(shownScore)
  
// console.log(item)
//   }

  // const orderPosition = ()=>{
  //   theScore.forEach(std=>{
  //    {orderPosition2(std.fullname, calculateScore(std.id))}
  //   })
  
  


  

  
  const giveGrade = (grd)=>{
    let mainGrade; 
    if(grd >= 75){
     mainGrade =  'A'
    }else if(grd < 75 && grd >= 65){
      mainGrade =  'B'
     }else if(grd < 65 && grd >= 55){
      mainGrade =  'C'
     }else if(grd < 55 && grd >= 45){
      mainGrade =  'D'
     }else if(grd < 45 && grd >= 35){
      mainGrade =  'E'
     }else{
      mainGrade = 'F'
      
     }
     return mainGrade
  }
  
  const getStudents = ()=>{
    setTheScore(data)
    // data.forEach(element => {
    //   console.log(element.studentid)
    //  });
  }

  return (
    <>
          <motion.div className='sidebar h-sreen bg-purple-50 w-3/4'
         initial={{opacity:0, x: 100}}
         animate={{opacity:1, x: 0}}
         transition={{duration:1}}
         >
          <h1 className='text-5xl text-center font-bold'>View Results</h1>
          <button className='mx-auto block rounded bg-gray-500 p-4 w-1/2 my-2 text-white' onClick={getStudents}>Load data</button>

          <table className='table-auto table border'>
            <thead>
                <tr className='border hover:bg-purple-800 bg-purple-600 text-purple-50'>
                    <th>#</th>
                    <th>Studentid</th>
                    <th>Full Name:</th>
                    <th>Class:</th>
                    <th>Score:</th>
                    <th>Grade:</th>
                    <th>Checkout</th>
                </tr>
            </thead>
            <tbody>
              {theScore.length? theScore.map((data,index)=>{
                return (
                  <tr className='hover:bg-purple-200' key={index}>
                    <td>{num++} </td>
                    <td>{`00${data.studentid}`}</td>
                    <td>{`${data.firstname} ${data.lastname}`}</td>
                    <td>{data.studentclass}</td>
                    <td>
                    {calculateScore(data.studentid)}
                    </td>
                    <td>
                      {calculateGrade(data.studentid)}
                      <span className={`p-2 m-3 bg-${calculateGrade(data.studentid) < 35 ? 'red':'purple'}-300`} >{giveGrade(calculateGrade(data.studentid))}</span>
                    </td>
                    <td>
                      <Link href={`/dashboard/${data.studentid}`} className='border px-5 py-2 rounded-sm bg-purple-100'>Checkout</Link>
                    </td>
                </tr>
                )
              }) : <tr><td>Please Load data...</td></tr>}
                
            </tbody>
           
          </table>

         

    
            {/* <button className='border px-5 py-2 rounded-sm bg-purple-100 block mx-auto w-3/4 bg-green-500' onClick={()=>orderPosition()}>Order By Position</button> */}
         </motion.div>
        
    </>
  )
}

export default Viewrlt

Viewrlt.getLayout = (pages)=>{
    return(
     <Layouts>
     {pages}
   </Layouts>
    )
     }