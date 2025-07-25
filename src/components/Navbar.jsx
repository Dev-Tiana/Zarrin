import React from 'react';
import logo from '../assets/Logo.png';
import search from '../assets/search-minus.png'

import  {NavLink} from 'react-router-dom';
import menu from '../assets/Menu.png'
import { useState } from 'react';

const Navbar = () => {
  const [isopen, setOpen] = useState(false); 
  const handleToggle = () => setOpen(prev=>!prev);
  return (
    <div className='w-full flex justify-between items-start md:items-center px-[5%] py-[15px] '>
       <NavLink to='/'><img src={logo} alt="" /></NavLink>
        <div className='hidden md:flex '>
        <ul className='inline-block px-[10px] py-[10px] mx-[10px]'>
            <NavLink to='/'><li className='inline-block mx-[10px] px-[10px] py-[5px]'></li></NavLink>
            <NavLink to='/blog'><li className='inline-block mx-[10px] px-[10px] py-[5px]'>Blog</li></NavLink>
            <NavLink to='/about'><li  className='inline-block mx-[10px] px-[10px] py-[5px]'>About</li></NavLink>
            
        </ul>
        <img className='w-[22px] h-[22px] relative top-[15px]' src={search} alt="" />
       <NavLink to='/contact'> <button className='px-[30px] py-4 border-0 rounded-md bg-[#7C4EE4] text-white cursor-pointer font-semibold text-base ml-[30px]'>Contact Us</button></NavLink>
       
        </div>
        {isopen && (
          <div className='flex flex-col justify-center items-center md:hidden'>
        <ul className=' px-[10px] pt-[20px] mx-[10px]'>
            <NavLink to='/'><li className=' mx-[10px] px-[10px] py-[5px]'></li></NavLink>
            <NavLink to='/blog'><li className=' mx-[10px] px-[10px] py-[5px]'>Blog</li></NavLink>
            <NavLink to='/about'><li  className=' mx-[10px] px-[10px] py-[5px]'>About</li></NavLink>
            
        </ul>
        <img className='flex flex-col w-[22px] h-[22px] my-[5px]' src={search} alt="" />
       <NavLink to='/contact'> <button className='px-[20px] py-3 border-0 rounded-md bg-[#7C4EE4] text-white cursor-pointer font-semibold text-base ml-[30px]'>Contact Us</button></NavLink>
       
        </div>
        )}

        <button className="flex md:hidden" onClick={handleToggle}>
          <img src={menu} alt=''/>
        </button>

        
    </div>
  )
}

export default Navbar