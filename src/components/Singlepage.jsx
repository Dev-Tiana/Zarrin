import React from 'react'
import  singlepageimage1 from '../assets/singlepageimage1.png'
import  singlepageimage2 from '../assets/singlepageimage2.png'
import Singlepagecard from './Singlepagecard'
import { useParams } from 'react-router-dom'

const Singlepage = () => {
  const {id} = useParams();
  return (
    <div>
      <div className='flex gap-3 items-center px-[9%] mt-20 mb-4'>
        <h2 className='font-[Roboto] font-[700] md:text-[10.09px] lg:text-[12px] text-[#333333]'>DEVELOPMENT</h2>
        <p className='font-[Roboto] font-[500] md:text-[10.09px] lg:text-[12px] text-[#999999]'>16 March 2023</p>
      </div>
      <h1 className='font-[Raleway] font-[700] text-[24px] md:text-[40.38px] lg:text-[48px] px-[9%]'>How to make a Game look more attractive with New VR & AI Technology</h1>
      <div className='flex justify-center items-center px-[3%] md:px-[0] lg:px-[3%]'>
        <img className='p-6 md:p-0 lg:p-6 lg:w-[1232px]lg:h-[608px] rounded-[16px]' src={singlepageimage1} alt="" />
      </div>
      <div className='flex flex-col gap-4 p-8 px-[6%] lg:px-[11%]'>
        <p className='font-[Roboto]  font-[400] text-[13.46px] lg:text-[16px] text-[#666666]'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it's publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we're committed to making AI accessible to everyone.
</p>
        <p className='font-[Roboto]  font-[400] text-[13.46px] lg:text-[16px] text-[#666666]'>We're now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we've been responsibly developing large language models so we can safely bring them to our products. Today, we're excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google's best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we're introducing new features that help people harness the power of generative AI to create, connect and collaborate.</p>
        <div className='flex gap-6 items-center px-[3%]'>
          <div className='w-[2px] h-[220px] md:w-[5px] md:h-[104px] bg-[#7C4EE4] border-none my-4'></div>
          <div className='flex flex-col gap-4'>
            <p className='font-[Raleway] font-[400] text-[20.19px] lg:text-[24px] text-[#666666]'>“People worry that computers will get too smart and take over the world, but the real problem is that they're too stupid and they've already taken over the world.”</p>
            <p className='font-[Roboto] font-[500] text-[16px] text-[#333333]'>- Pedro Domingos</p>
          </div>

        </div>
        <p className='font-[Roboto] font-[400] text-[13.46px] lg:text-[16px] text-[#666666]'>More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it's using Smart Compose in Gmail or auto-generated summaries in Google Docs. Now, we're excited to take the next step and bring a limited set of trusted testers a new set of features that makes the process of writing even easier. In Gmail and Google Docs, you can simply type in a topic you'd like to write about, and a draft will be instantly generated for you. So if you're a manager onboarding a new employee, Workspace saves you the time and effort involved in writing that first welcome email. From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or professional — all in just a few clicks. We'll be rolling out these new experiences to testers in the coming weeks.</p>
        <div className='flex justify-center items-center'><img className='md:w-[686.4px] md:h-[262.45px] lg:w-[816px] lg:h-[312px] rounded-[16px] px-[3%]' src={singlepageimage2} alt="" /></div>
        <p className='font-[Roboto] font-[400] text-[13.46px] lg:text-[16px] text-[#333333]'>We're so excited by the potential of generative AI, and the opportunities it will unlock — from helping people express themselves creatively, to helping developers build brand new types of applications, to transforming how businesses and governments engage their customers and constituents. Stay tuned for more to come in the weeks and months ahead.</p>
      </div>
      <div className='flex justify-between items-center mt-8 mb-4 px-[4%] md:px-[6%]'>
          <h1 className='font-bold font-[Raleway]  text-[20px] md:text-[34.46px] lg:text-[48px] text-[#333333]'>Popular Post</h1>
          <button type='button'className='font-[Raleway] font-bold text-[14px] text-[#ffffff] bg-[#7C4EE4] px-6  md:px-6 lg:px-8 py-3 md:py-[3] lg:py-4 rounded-[8px]'>View All</button>
        </div>
        <Singlepagecard />
    </div>
  )
}

export default Singlepage