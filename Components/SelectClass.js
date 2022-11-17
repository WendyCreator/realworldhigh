import React from 'react'

const SelectClass = ({labelName}) => {
  return (
    <div className='w-4/5 ml-24 bg-white h-20 my-3 flex p-4 text-2xl item-center justify-center shadow-sm'>
        <label htmlFor='class'>{labelName}</label>
        <select className='bg-white border w-3/4 m-auto block p-3 focus:border-gray-200' id='class' name='studentclass'>
            <option>All</option>
            <option>JSS1</option>
            <option>JSS2</option>
            <option>JSS3</option>
            <option>SS1</option>
            <option>SS2</option>
            <option>SS3</option>
        </select>
    </div>
  )
}

export default SelectClass