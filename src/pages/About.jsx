import React from 'react'
import Heading from "../components/Heading"
import Aboutwork from '../components/Aboutwork'
import Aboutimg from "../assets/blogimage.png"
import Aboutcard from '../components/Aboutcard'

const About = () => {
  return (
    <div>
          <Heading 
          welcome="ABOUT US"
          head="Creative Blog Writting and publishing site"
          body="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
          />
          <img className='w-full px-[5%] py-10' src={Aboutimg} alt="" />
          <Aboutwork 
          Work="HOW WE WORK"
          show="I will show you how our team works"
          bring="Bring to the table win-win market strategies to ensure perfect articles. "
          />
          <Aboutcard />
        </div>
  )
}

export default About