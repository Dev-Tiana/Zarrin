import React from 'react'

const Heading2 = ({head,body}) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center px-[8%] md:px-[15%] lg:px-[20%] py-8 text-center'>
        <h1 className='font-[Raleway] font-bold text-[48px] md:text-[38px] lg:text-[48px] text-[#333333] text-center'>{head}</h1>
        <p className='font-[Raleway] font-normal text-[11.17px] md:text-[11.17px] lg:text-[16px] text-[#999999] text-center px-[10%] md:px-[25%] lg:px-[20%]'>{body}</p>
    </div>
  )
}

export default Heading2