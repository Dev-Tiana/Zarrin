import React from 'react'

const Heading = ({welcome, head, body}) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center px-[8%] md:px-[15%] lg:px-[20%] py-8 text-center'>
      <span className='font-[Raleway] font-bold text-[16px] text-[#666666]'>{welcome}</span>
      <h2 className='font-[Raleway] font-bold text-[48px] md:text-[38px] lg:text-[48px] text-[#333333] text-center'>{head}</h2>
      <p className='font-[Roboto] font-normal text-[16px] text-[#666666]'>{body}</p>
    </div>
  )
}

export default Heading