import React from 'react'
import { forwardRef } from 'react'

const InputField = forwardRef(function InputField(props, ref) {
  // {inputId, inputType, labelName,name, change, value}
  const {inputId, inputType, labelName,name, change, value} = props
  return (
    <>
    <div className='form-control w-full bg-white-200 flex flex-col ml-24'>
    <label htmlFor={inputId} className='text-xl my-3'>{labelName}</label>
    <input 
   className='w-3/4 shadow p-3 rounded focus:outline-none border bg-white '
   type={inputType}
    id={inputId}
    name={name}
    // onChange={change}
    value={value}
    ref={ref}
    />
 </div>
   
</>
  )
})
{/* <InputField inputId = 'firstname' inputType = 'text' labelName= 'First Name:'  name="firstname" change={formik.handleChange} value={formik.values.firstname} formik = {formik} /> */}
export default InputField