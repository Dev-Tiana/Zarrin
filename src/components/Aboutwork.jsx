import React from 'react'

const Aboutwork = ({Work, show, bring}) => {
  return (
    <div className='flex flex-col  gap-4  justify-center px-[4%] md:px-[5%] lg:px-[8%] py-8'>
        <span className='font-[Roboto] font-bold text-[16px] text-[#666666]'>{Work}</span>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center md:justify-between'>
            <h1 className='font-[Raleway] font-bold text-[35px] md:text-[48px] text-[#333333] md:w-1/2'>{show}</h1>
            <p className='font-[Robot] font-normal text-[20px] md:text-[16px] text-[#666666] md:w-1/2 md:p-16'>{bring}</p>
        </div>
        
    </div>
  )
}

export default Aboutwork