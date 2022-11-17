import React from 'react'
import studentdata from '../database/studentdata'



const SelectStd = ({labelName, stddata, change , name}) => {
  return (
    <div className='w-4/5 ml-24 bg-white h-20 my-3 flex p-4 text-2xl item-center justify-center shadow-sm'>
    <label htmlFor='class'>{labelName}</label>
    <select className='bg-white border w-3/4 m-auto block p-3 focus:border-gray-200' id='stds' onChange={(e)=>change(e)} name={name}>
       {
        stddata.map(data=>{
            return (
                <option key={data.studentid}>{`${data.firstname} ${data.lastname}`}</option>
            )
        })
       }
    </select>
</div>
  )
}

export default SelectStd