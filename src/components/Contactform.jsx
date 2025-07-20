import React from 'react'
import { Form } from 'react-router-dom'
import Labelform from '../components/Labelform'

const Contactform = () => {
  return (
    <div className='bg-white shadow-[1px_1px_1px_1px_rgba(0,0,0,0.50)] rounded-[16px] mx-[6%] md:mx-[8%] lg:mx-[16%] px-[2%] md:px-[10%] lg:px-[8%] py-8 relative bottom-[100px]'>
        <Form className='flex flex-col gap-4 justify-between'>
            <div className='flex flex-col md:flex-row justify-between gap-4'>
                <div className='w-full'>
                <Labelform 
                label="Name"
                input={{
                    type: 'text',
                    placeholder: '',
                    className: 'py-3 border-[1px] border-solid border-black rounded-[6px]'

                }}/>
            </div>
            <div className='w-full'>
                <Labelform 
                label="Email"
            input={{
                type: 'email',
                placeholder: '',
                name: 'email',
                className: 'py-3 border-[1px] border-black border-solid rounded-[6px] focus:outline-none focus:border-[#7C4EE4]'
  }} />
            </div>
            </div>
            <div className='flex flex-col md:flex-row  justify-between gap-4'>
                <div className='w-full'>
                <Labelform 
                label="phone"
                input={{
                type: 'number',
                placeholder: '',
                name: 'phone',
                className: 'py-3 border-[1px] border-black border-solid rounded-[6px] focus:outline-none focus:border-[#7C4EE4]'
  }}/>
            </div>
            <div className='w-full'>
                <Labelform 
                label="Subject"
                input={{
                type: 'text',
                placeholder: '',
                name: 'subject',
                className: 'py-3 border-[1px] border-black border-solid rounded-[6px] focus:outline-none focus:border-[#7C4EE4]'
  }}/>
            </div>
            </div>
            <div className='w-[100%] md:w-[100%] lg:w-[100%]'>
                <label className='' htmlFor="Message">Message</label>
                <textarea className='w-full px-4 py-14 border-[1px] border-[#666666] rounded-[6px] focus:outline-none focus:border-[#7C4EE4]' name="" id=""></textarea>
            </div>
            <button className='px-6 py-6 font-[Rasleway] font-bold text-[18px] bg-[#7C4EE4] text-[#ffffff] w-fit rounded-[8px] flex m-[auto]'>Send Meeessage</button>
        </Form>
    </div>
  )
}

export default Contactform