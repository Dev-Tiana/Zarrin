import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Aboutcard = () => {
    const navigate = useNavigate();
    const aboutList = [
        {"id": 1,
            "label": "01",
            "heading": "Brainstorming",
            "body": "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated",
            "linkName": "Read More...",
            "link": ""

        },
        {"id": 2,
            "label": "02",
            "heading": "Analysing",
            "body": "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.",
            "linkName": "",

        },
        {"id": 3,
            "label": "03",
            "heading": "News Publishing",
            "body": "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
            "linkName": "",

        }
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-[4%] md:px-[5%] lg:px-[8%] py-8 bg-[#ffffff]'>
        {aboutList.map((card, index) => (
  <div key={card.id}>
   <NavLink><div className='py-4 rounded-[8px]'>
      <h1 className='font-[Raleway] font-bold text-[72px] text-[#666666]'>{card.label}</h1>
      <h2 className='font-[Raleway] font-bold text-[24px] text-[#7C4EE4]'>{card.heading}</h2>
      <p className='font-[Roboto] font-normal text-[16px] text-[#666666] leading-relaxed'>{card.body}</p>
      <Link className='font-[Raleway] font-bold text-[24px] text-[#FFFFFF] underline' to={card.link}>
        {card.linkName}
      </Link>
    </div> 
    </NavLink>
  </div>
))}

    </div>
  )
}

export default Aboutcard