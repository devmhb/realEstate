import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className=' m-[auto] max-w-[80%] h-[100vh] '>
        <Image  src="/hero.png" alt="hero bg" fill style={{objectFit: "cover", objectPosition: "center", zIndex: "-2"}} />
    <div className='relative'>
        <Navbar/>
        <div className='w-[40%] bg-gradient-to-tl mt-[3rem] text-white'>
            <h1 className='font-bold text-6xl mb-[1rem]'>Beautiful homes made for you</h1>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi corrupti aperiam eos corporis natus officia architecto molestias deserunt quibusdam! Aliquid quam impedit fugiat quidem laborum?</p>
        </div>
        <div className='  m-[auto] absolute left-[20%] bottom-[-55%] bg-slate-50 pl-[5%] pr-[50%] pt-[1.5rem] pb-[1.5rem]'>
          <a href="" className='text-black font-semibold'>See all listing ➛</a>
        </div>
    </div>
    </div>
  )
}

export default Hero