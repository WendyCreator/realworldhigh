import Link from 'next/link'
import React, { useEffect, useRef, useState, forwardRef } from 'react'
import Layouts from '../../Components/Layouts'
import {motion} from 'framer-motion'
import InputField from '../../Components/InputField'
import SelectStd from '../../Components/SelectStd'
import Classes from '../../Components/Classes,'
import Select from '../../Components/Select'
import studentdata from '../../database/studentdata'
import Course from '../../Components/Course'
import axios from 'axios'
// import Student from '../api/models/StudentSchema'
// import getStudents from '../api/getData'
import useSWR from 'swr'



const fetcher = (...args) => fetch(...args).then((res) => res.json())

const registerrlt = () => {
  const [students, setStudents] = useState(studentdata)
  const [records, setRecords] = useState({})
  const [message, setMessage] = useState(false)
  const [allstudents, setAllStudents] = useState([])
  const allCourses = ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology']
  const [exame, setExame] = useState([])
  const [cae, setCae] = useState([])
  const [subjects, setSubjects] = useState({})
  const [subjectsEx, setSubjectsEx] = useState({})
  const [allGrade, setAllGrade] = useState({})
  let x = 0
  let y = 0
  const exam = []
    const CA = []  
    const studentid  = useRef() 

    const { data, error } = useSWR('/api/getData', fetcher)

  

  useEffect(()=>{

  while(x <= 70){
    exam.push(x)
    x++
  }
  setExame(exam)
  
  while(y <= 30){
    CA.push(y)
    y++
  }
  setCae(CA)
}, [])



 
  const settingStd = (e)=>{
    if(e.target.value !== 'All'){
      const filterStds = allstudents.filter((stds)=>{
        return e.target.value == stds.studentclass 
       })
       setAllStudents(filterStds)
    }else{
      setAllStudents(allstudents)
    } 
    
  }

  const selectid= (e)=>{
    const soi = allstudents.find(stdd=>{
      return  `${stdd.firstname} ${stdd.lastname}` == e.target.value
    })
    studentid.current.value = soi.studentid
    console.log(soi.subjects[2])
    
  }

  const changee = (e)=>{
    setSubjects({...subjects, [e.target.name]: e.target.value})
    
 
  }

  const changeex = (e)=>{
  setSubjectsEx({...subjectsEx, [e.target.name]: e.target.value})
  
  }
  const savedata = (e)=>{
    setAllGrade({
      Mathematics:[parseInt(subjects.Mathematics),parseInt(subjectsEx.Mathematics)],
      English:[parseInt(subjects.English), parseInt(subjectsEx.English)],
      Chemistry: [parseInt(subjects.Chemistry), parseInt(subjectsEx.Chemistry)],
      Physics:[parseInt(subjects.Physics),parseInt( subjectsEx.Physics)],
      Biology:[parseInt(subjects.Biology), parseInt(subjectsEx.Biology)]
      
    })
    
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
   
  const formData = new FormData(e.target)
//  const waitForm = await formData.append('subjects', allGrade)
 const data = Object.fromEntries(formData)
 const data1 = {...data, subjects: allGrade}
 

  const send =  await axios.post('/api/records', data1)
  const msg = send?'Recorded!':'Not Recorded';
  setMessage(true)

    
  }
  const show = ()=>{
    if(data) setAllStudents(data)
 
}

 


  return (
    <>
      { data && <motion.div className='sidebar h-sreen bg-purple-50 w-3/4'
         initial={{opacity:0, x: 100}}
         animate={{opacity:1, x: 0}}
         transition={{duration:1}}
         >
          <h1 className='text-5xl text-center font-bold'>Register Results</h1>
          <button type='button' className='bg-purple-500 text-white p-4 shadow-sm mx-auto mt-3 block' onClick={show}>Get all Students</button>
         { message && <span className='ml-24 bg-green-200 text-green-500 my-4 block p-2 w-3/4'>Student Registered Successfully!</span>}
          <form onSubmit={handleSubmit}>
          <InputField inputId = 'title' inputType = 'text' labelName= 'Recorder Name:'  name="title" change={'change'}   />
          <Select labelName = 'Student Class:' settingStd={settingStd}/>
          <SelectStd labelName = 'Student Name:'  stddata = {allstudents} change={selectid} name='studentname'/>
          <InputField inputId = 'studentid' inputType = 'text' labelName= 'Student ID:'  name="studentid" change={'change'} ref = {studentid}  />

          <div className='flex flex-col ml-24 bg-gray-100 w-3/4'>
            {
            
             allCourses.map(course=>{
              return(
                <div className='flex items-center mt-2 justify-between' key={course}>
                <Course label = {course} />
                <div className=' m-10'>
                <label className='m-4'>CA:</label>
                <select className='bg-white p-4' name={course} onChange={changee}>
                  {
                    cae.map(ca=>{
                      return(
                        <option key={ca}>{ca}</option>
                      )
                    })
                  }
                </select>
                <label className='m-4'>Exam:</label>
                <select className='bg-white p-4' name={course} onChange={changeex}>
                {
                    exame.map(ex=>{
                      return(
                        <option key={ex}>{ex}</option>
                      )
                    })
                  }
                </select>
                </div>
                </div>
              )
            })
          }
           </div>
          <div className='flexflex-cols ml-24 w-3/4'>
            <button type='button' onClick={savedata} className='bg-gray-600 text-purple-200 block w-full mt-4 p-4 rounded-sm text-xl hover:bg-gray-800'>Save Records</button>
            <input  type={`submit`} className='bg-purple-600 text-purple-200 block w-full mt-4 p-4 rounded-sm text-xl hover:bg-purple-800'/>
           </div>
          </form>
         </motion.div>
        }
    </>
  )
}

export default registerrlt

registerrlt.getLayout = (pages)=>{
    return(
     <Layouts>
     {pages}
   </Layouts>
    )
     }

    //  export async function getStaticProps(){
    //    const data = await getStudents()
    //   //  const data = JSON.parse(initaildata)
    //    return{
    //     props:{
    //       data
    //     }
    //    }
    //  }