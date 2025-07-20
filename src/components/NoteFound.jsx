import React from 'react'
import notimage from '../assets/404.png'

const NoteFound = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 m-[5rem_18%] p-12 rounded-[16px] text-white bg-[#7C4EE4]'>
        {/* <h1 className='font-[Raleway] font-extrabold text-[5rem] leading-[48px] tracking-[0.2px] text-center mb-8'>404</h1> */}
        <img className='' src={notimage} alt="" />
        <div className='text-center font-[Raleway] font-normal text-[24px] leading-[150%] tracking-[0px] text-white'><p>Sorry!</p>
        <p className='font-[Raleway] font-normal text-[20px] md:text-[24px] lg:text-[24px]'>The link is broken, try to refresh or go to home</p></div>
        <button className='px-[30px] py-[16px] border-none rounded-[8px] bg-white text-[#150E06] cursor-pointer font-semibold text-[16px] gap-[10px] mx-auto'>Go To Home</button>
        
    </div>
  )
}

export default NoteFound







