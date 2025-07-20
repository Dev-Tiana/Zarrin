import React from 'react'
import heroImage from '../assets/Image Placeholder.png'
import backgroundImg from '../assets/background img.png'
import backgroundImg2 from '../assets/background img2.png'
import Homecard from '../components/Homecard'
import Homecard2 from '../components/Homecard2'


const Home = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row items-start px-[3%] md:px-[3%] lg:px-[6%] py-20 bg-[#7C4EE4] gap-10 md:gap-4 w-full'>
        <div className='flex flex-col gap-6 md:gap-6 lg:gap-12 w-full'>
          <p className='font-semibold text-base leading-7 tracking-normal text-left text-white font-raleway'>Featured Post</p>
          <h2 className='font-bold text-[55px] md:text-[45.95px] lg:text-[60px] md:leading-[56px] lg:leading-[86px] tracking-normal font-[Raleway] text-left text-white'>How AI will Change the Future</h2>
          <p className='font-normal leading-7 tracking-normal text-left text-white font-raleway text-[11.49px] md:text-[11.49px] lg:text-[16px] pr-20'>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction </p>
          <button className='inline-block px-[30px] py-4 border-0 rounded-md bg-white text-[#150E06] cursor-pointer font-semibold text-base w-fit'>Read More</button>
        </div>
        <div className='flex items-center w-full  h-full p-0 m-0 bg-cover bg-center bg-no-repeat ' style={{backgroundImage: `Url(${heroImage})`}}>
          <img className='' src={heroImage} alt="" />
        </div>
      </div>



    {/* hero 2 section  */}
    <div className='w-full px-[6%] py-8 md:my-[18%] lg:my-[10%]'>
      {/* <div className='hidden md:block w-full h-fit my-16 mx-auto p-12 rounded-[10px]' style={{ backgroundImage: `url(${backgroundImg})`, width: '100%', height: '800px ', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', rounded: '[10px]' }}> */}

        <div className="hidden md:block m-auto basis-1/2 "><img className="w-full h-fit md:h-[413.58px] lg:h-[576px] object-fill" src={backgroundImg} alt="" />
        
        <div className='flex flex-col justify-center md:gap-3 lg:gap-6 bg-white absolute pr-20 pl-4 py-6 right-[6%] md:top-[210%] lg:top-[220%] rounded-md w-[65%] h-fit shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
          <div className='flex gap-4'>
            <p className='font-bold md:text-[8.62px] lg:text-[12px] leading-[150%] tracking-normal text-left text-[#333333] font-roboto'>DEVELOPMENT</p>
          <p className='font-medium md:text-[8.62px] lg:text-[12px] leading-[150%] tracking-normal text-[#999999] font-roboto'>16 March 2023</p>
          </div>
          <h2 className='font-bold md:text-[22.98px] lg:text-[30px] leading-[45px] tracking-[0.2px] text-left text-[#333333] font-raleway'>How to make a Game look more attractive with New VR & AI Technology</h2>
          <p className='font-normal md:text-[11.49px] lg:text-[15px] leading-[28px] tracking-normal text-left text-[#666666] font-raleway'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
        </p>
          <button className='md:px-[15px] lg:px-[30px]  md:py-2 lg:py-4 border border-[#7C4EE4] rounded-md bg-white text-[#7C4EE4] cursor-pointer font-semibold text-base w-fit'>Read More</button>
        </div>
        
        </div>
        </div>

      <div className='hidden  md:flex justify-between items-center md:mt-18 lg:mt-10 mb-4 px-[6%] py-8'>
          <h1 className='font-bold font-[Raleway] text-[48px] text-[#333333]'>Our Recent Post</h1>
          <button type='button'className='font-[Raleway] font-bold text-[14px] text-[#ffffff] bg-[#7C4EE4] px-8 py-4 rounded-[8px]'>View All</button>
        </div>
    {/* hero 3 section */}
       <div className="w-full px-[6%] py-8">
    <div className="bg-white md:bg-transparent flex flex-col md:flex-row items-start justify-between gap-10  md:gap-[4%] p-4 md:p-0 shadow-md md:shadow-none rounded-xl">
      <div className="m-auto  basis-1/2"><img className="w-full h-fit md:h-[327.42px] lg:h-[456px] object-fill" src={backgroundImg2} alt="" /></div>
      
      <div className=" basis-1/2 flex flex-col gap-4 justify-center mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs text-[#333333]">DEVELOPMENT</span>
          <span className="text-[#999999] text-xs font-medium">
            16 March 2023
          </span>
        </div>
        <h2 className='font-semibold text-3xl md:text-2xl lg:text-3xl text-[#333333]'>
          How to make a Game look more attractive with New VR & AI Technology
        </h2>
        <p className="text-base font-normal text-[#666666]">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
         <button className='bg-white rounded-md border border-[#7C4EE4] py-2 px-5 w-fit text-[#7C4EE4] font-semibold text-[]'>Read More</button>
      </div>
    </div>
    </div>
    <Homecard2 />
        <div className='flex justify-between items-center mt-8 mb-4 px-[4%] md:px-[6%]'>
          <h1 className='font-bold font-[Raleway]  text-[20px] md:text-[34.46px] lg:text-[48px] text-[#333333]'>Popular Post</h1>
          <button type='button'className='font-[Raleway] font-bold text-[14px] text-[#ffffff] bg-[#7C4EE4] px-6  md:px-6 lg:px-8 py-3 md:py-[3] lg:py-4 rounded-[8px]'>View All</button>
        </div>
        <Homecard 
        className='grid grid-cols-1 md:grid-cols-3'
        />

    </div>
  )
}

export default Home;