import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import GradientLine from './GradientLine';

const Hero = () => {
  return (
    <div className=' m-[auto '>
      {/* <div className='h-[100vh]'>
        <Image  src="/hero.png" alt="hero bg"  fill style={{objectFit: "cover", objectPosition: "center", zIndex: "-2"}} />
      </div> */}
    <div className='relative text-black'>
        <Navbar/>
        <div className='w-[40%] mt-[3rem] '>
            <h1 className='font-bold text-6xl mb-[1rem]'>Beautiful homes made for you</h1>
            <GradientLine/>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi corrupti aperiam eos corporis natus officia architecto molestias deserunt quibusdam! Aliquid quam impedit fugiat quidem laborum?</p>
        </div>
        {/* <div className=' left-[0%] bottom-[-55%] bg-slate-50 pl-[5%] pr-[80%] pt-[1.5rem] pb-[1.5rem]'>
          <a href="" className='text-black font-semibold'>See all listing <span className='text-[#FFAC12]'>➛</span></a>
        </div> */}
    </div>
    </div>
  )
}

export default Hero