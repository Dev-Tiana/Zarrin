import React from 'react'
import homecard7 from '../assets/homecard7.png'
import homecard8 from '../assets/homecard8.png'
import homecard9 from '../assets/homecard9.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Singlepagecard = () => {
    const navigate = useNavigate()
  const cardList = [
    {"id": 1,
      "img": homecard7,
      "detail": "Travel",
      "date": "13 March 2023",
      "heading": "Who is the best singer on chart?Know him?",
      "body": "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and   ",
      "linkName":"Read More...",
      "link": ""
    }
,
    {"id": 2,
      "img": homecard8,
      "detail": "DEVELOPMENT",
      "date": "11 March 2023",
      "heading": "How to start export import business from home?",
      "body": "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs  ",
      "linkName": "Read More...",
      "link": ""
    },
    {"id": 3,
      "img": homecard9,
      "detail": "Sports",
      "date": "10 March 2023",
      "heading": "Make some drinks with chocolates chocolates and milk",
      "body": "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      "linkName": "Read More...",
      "link": ""
    }
]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-[6%] py-8 '>
          {cardList.map((card)=>(
            <div className='flex flex-col gap-3' key={card.id}>
              <img src={card.img} alt="" />
              <div className='flex gap-2 mt-4'>
                <span className='font-bold font-[Raleway]'>{card.detail}</span>
              <span>{card.date}</span>
              
              </div>
              <h2 className='font-bold font-[Raleway] text-[20px] text-[#333333]'>{card.heading}</h2>
              <p className='font-[Raleway] font-normal text-[14px] text-[#666666]'>{card.body}</p>
              <Link className='font-[Roboto] font-bold text-[15px] text-[#7C4EE4] underline mb-4' to={card.link}>{card.linkName}</Link>
            </div>
          ))}
        </div>
  )
}

export default Singlepagecard