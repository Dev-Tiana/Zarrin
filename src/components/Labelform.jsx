import React from 'react'

const Labelform = ({label, input}) => {
//      const mergedClassName = [
//     'w-full px-4 py-4 border-[2px] border-[#666666] rounded-[6px] focus:outline-none focus:border-[#7C4EE4] inline-block',
//     input?.className || ''
//   ].join(' ')
  return (
    <div className='flex flex-col gap-2 mb-4'>
        <label className='font-[Raleway] font-[600] text-[16px] text-[#4C4C4C] mb-2 block' htmlFor={label}>{label}</label>
        <input {...input}
        />
    </div>
  )
}

export default Labelform