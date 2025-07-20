import React from 'react'
import homecard1 from '../assets/homecard1.png'
import homecard2 from '../assets/homecard2.png'
import homecard3 from '../assets/homecard3.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Homecard2 = () => {
    const navigate = useNavigate()
  const cardList = [
    {"id": 1,
      "img": homecard1,
      "detail": "Travel",
      "date": "13 March 2023",
      "heading": "8 Rules of Travelling In Sea You Need To Know",
      "body": "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      "linkName":"Read More...",
      "link": ""
    }
,
    {"id": 2,
      "img": homecard2,
      "detail": "DEVELOPMENT",
      "date": "11March 2023",
      "heading": "How to build strong portfolio and get a Job in UI/UX",
      "body": "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
      "linkName": "Read More...",
      "link": ""
    },
    {"id": 3,
      "img": homecard3,
      "detail": "Sports",
      "date": "10 March 2023",
      "heading": "How to Be a Professional Footballer in 2023",
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

export default Homecard2