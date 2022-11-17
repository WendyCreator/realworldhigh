import React, { useState } from 'react'

const Course = ({label, setSelectedCourse, selectedCourse}) => {

  const handleChange = (e)=>{
    setSelectedCourse([...selectedCourse, e.target.value])
  }
 
  
  return (
    <label>
    <input className='sr-only peer' type='checkbox' name='size' value={label} onChange={handleChange} />
    <div className='w-max h-max p-4 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white m-3'>{label}</div> 
    </label>
  )
}

export default Course