import React from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import vector from '../assets/Vector.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8 w-full bg-[#7C4EE4] text-center px-[4%] md:px-[14%] lg:px-[18%] py-[5rem]'>
            {/* <img className='vector' src={vector} alt="" /> */}
            <h2 className='font-[Raleway] font-bold text-[30px]  md:text-[37px] lg:text-[52px] leading-[48px] tracking-[0.2px] text-center text-white'>Get our stories delivered From us to your inbox weekly.</h2>
            <div className=' flex justify-between items-center gap-4'><input className='w-full md:w-[280px] h-[45px] rounded-[8px] border-none pl-[5px]' type="text" placeholder='Your Email' />
            <button className='whitespace-nowrap px-[10px] md:px-[14px] lg:px-[18px] py-[10px] border-2 border-white rounded-[8px] bg-[#7C4EE4] text-white cursor-pointer font-semibold text-[13px] md:text-[15px] lg:text-[16px]'>Get Started</button></div>
            <p className='font-[Raleway] font-normal text-[11.49px] md:text-[11.49px] lg:text-[16px] leading-[28px] tracking-[0px] text-center text-[#BBBBBB] px-[6%] md:px-[14%] lg:px-[16%]'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-full bg-white text-center p-12">
            <img src={logo} alt="" />
            <ul className='flex justify-center items-center list-none gap-8'>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/blog'><li>Blog</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact Us</li></NavLink>
            </ul>
            <div className="flex justify-center content-center gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#7C4EE4] text-white text-center flex items-center justify-center"><p className='font-[Raleway] font-semibold text-[18px] leading-[38px] tracking-[0px] text-center text-white'>FB</p></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#7C4EE4] text-white text-center flex items-center justify-center"><p className='font-[Raleway] font-semibold text-[18px] leading-[38px] tracking-[0px] text-center text-white'>IG</p></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#7C4EE4] text-white text-center flex items-center justify-center"><p className='font-[Raleway] font-semibold text-[18px] leading-[38px] tracking-[0px] text-center text-white'>LN</p></div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#7C4EE4] text-white text-center flex items-center justify-center"><p className='font-[Raleway] font-semibold text-[18px] leading-[38px] tracking-[0px] text-center text-white'>YT</p></div>
            </div>
            <hr className='w-full h-px bg-[#7C4EE4] border-none my-4' />
            <p className='font-[Raleway] font-normal text-[15px] leading-[150%] tracking-[0px] text-center text-[#150E06]'>Copyright Ideapeel Inc © 2023. All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer