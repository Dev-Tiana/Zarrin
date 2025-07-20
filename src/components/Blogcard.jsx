import React from 'react'
import homecard1 from "../assets/homecard1.png"
import homecard2 from "../assets/homecard2.png"
import homecard3 from "../assets/homecard3.png"
import  {Link} from 'react-router-dom';
import  {useNavigate} from 'react-router-dom';
import homecard4 from "../assets/homecard4.png"
import homecard5 from "../assets/homecard5.png"
import homecard6 from "../assets/homecard6.png"
import homecard7 from "../assets/homecard7.png"
import homecard8 from "../assets/homecard8.png"
import homecard9 from "../assets/homecard9.png"

const Blogcard = () => {
  const navigate = useNavigate()
  const cardList = [
    {"id": 1,
      "img": homecard4,
      "detail": "Travel",
      "date": "13 March 2023",
      "heading": "Train Or Bus Journey?Which one suits?",
      "body": "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
      "linkName": "Read More...",
      "link": ""
    },
    {"id": 2,
      "img": homecard5,
      "detail": "DEVELOPMENT",
      "date": "11 March 2023",
      "heading": "Best Website to research for your  next project",
      "body": "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
      "linkName": "Read More...",
      "link": ""
    },
    {"id": 3,
      "img": homecard6,
      "detail": "Sports",
      "date": "10 March 2023",
      "heading": "How to Be a Dancer in 2023 with proper skills?",
      "body": "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
      "linkName": "Read More...",
      "link": ""
    },

    {"id": 4,
      "img": homecard7,
      "detail": "Travel",
      "date": "13 March 2023",
      "heading": "Who is the best singer on chart?Know him?",
      "body": "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  ",
      "linkName": "Read More...",
      "link": ""
    },
    {"id": 5,
      "img": homecard8,
      "detail": "DEVELOPMENT",
      "date": "11 March 2023",
      "heading": "How to start export import business from home?",
      "body": "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
      "linkName": "Read More...",
      "link": ""
    },
    {"id": 6,
      "img": homecard9,
      "detail": "Sports",
      "date": "10 March 2023",
      "heading": "Make some drinks with chocolates chocolates and milk",
      "body": "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      "linkName": "Read More...",
      "link": ""
    },

    {"id": 7,
      "img": homecard1,
      "detail": "Travel",
      "date": "13 March 2023",
      "heading": "8 Rules of Travelling In Sea You Need To Know",
      "body": "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      "linkName":"Read More...",
      "link": ""
    }
,
    {"id": 8,
      "img": homecard2,
      "detail": "DEVELOPMENT",
      "date": "11March 2023",
      "heading": "How to build strong portfolio and get a Job in UI/UX",
      "body": "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
      "linkName": "Read More...",
      "link": ""
    },
    {"id": 9,
      "img": homecard3,
      "detail": "Sports",
      "date": "10 March 2023",
      "heading": "How to Be a Professional Footballer in 2023",
      "body": "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      "linkName": "Read More...",
    },  
  ]
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-[6%] py-8 '>
      {cardList.map((card)=>(
        <div className='flex flex-col gap-3' key={card.id}  onClick={()=>navigate(`/blog/${card.id}`)}>
          <img src={card.img} alt="" />
          <div className='flex gap-2 mt-4'>
            <span className='font-bold font-[Raleway]'>{card.detail}</span>
          <span>{card.date}</span>
          
          </div>
          <h2 className='font-bold font-[Raleway] text-[20px] text-[#333333]'>{card.heading}</h2>
          <p className='font-[Raleway] font-normal text-[14px] text-[#666666]'>{card.body}</p>
          <Link to={`/blog/${card.id}`} className='font-[Roboto] font-bold text-[15px] text-[#7C4EE4] underline mb-4'>{card.linkName}</Link>
        </div>
      ))}
    </div>
  )
}

export default Blogcard