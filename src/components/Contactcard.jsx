import React from 'react'
import { useNavigate } from 'react-router-dom'
import address from '../assets/address.png'
import email from '../assets/email2.png'
import phone from '../assets/phone.png'

const Contactcard = () => {
    const navigate = useNavigate();
    const contactList = [
        {'id': 1,
            'icon': address,
            'heading': "Office",
            'body': "Victoria Street, London, UK"
        },
        {'id': 2,
            'icon': email,
            'heading': "Email",
            'body': "hello@zarrin.com"
        },
        {'id': 3,
            'icon': phone,
            'heading': "Phone",
            'body': "(001) 2342 3451"
        }
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-[10%] py-8'>
        {contactList.map((card) =>(
            <div className='bg-white shadow-[1px_1px_1px_1px_rgba(0,0,0,0.10)]  flex flex-col justify-center items-center gap-4 py-[25%] md:py-[10%] rounded-[8px]' key={card.id}>
                <div className='w-[50px] h-[50px] rounded-full bg-[#7C4EE4] flex justify-center items-center'><img className='' src={card.icon} alt="" /></div>
                <h2 className='font-[Raleway]  font-bold text-[13.97px] text-[#7C4EE4]'>{card.heading}</h2>
                <p className='font-[Raleway] font-[500] text-[11.17px] text-[#7A7A7A]'>{card.body}</p>

            </div>
        ))}
    </div>
  )
}

export default Contactcard