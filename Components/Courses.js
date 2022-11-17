import React from 'react'

const Courses = ({labelName}) => {
  return (
    <div className='w-4/5 bg-white h-20 my-3 flex p-4 text-2xl item-center justify-center shadow-sm'>
        <label htmlFor='class'>{labelName}</label>
        {/* <select className='bg-white border w-3/4 m-auto block p-3 focus:border-gray-200' id='class'>
            <option>All</option>
            <option>Mathematics</option>
            <option>Biology</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>English</option>
            <option>Agriculture</option>
        </select> */}
    </div>
  )
}

export default Courses