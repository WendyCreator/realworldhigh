import React from 'react'
import studentdata from '../database/studentdata'



const Classes = ({labelName}) => {
    
  return (
    <div className='w-4/5 ml-24 bg-white h-20 my-3 flex p-4 text-2xl item-center justify-center shadow-sm'>
    <label htmlFor='class'>{labelName}</label>
    <select className='bg-white border w-3/4 m-auto block p-3 focus:border-gray-200' id='stds'>
       {
        studentdata.map(data=>{
            return (
                <option key={data.id}>{data.fullname}</option>
            )
        })
       }
    </select>
</div>
  )
}

export default Classes