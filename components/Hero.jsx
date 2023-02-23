import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import GradientLine from './GradientLine';

const Hero = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-gradient-to-tr from-[#000000]  to-[#00000034] relative'>
            <div className=''>
                  <Image className='' src="/hero.png" alt="hero bg"  fill style={{objectFit: "cover", objectPosition: "center", zIndex: "-2"}} />
            </div>
          <div className='max-w-[90%] m-[auto]'>
            <div className='text-white '>
              <Navbar/>
              <div className='w-[50%] mt-[3rem] '>
                  <h1 className='font-bold text-6xl mb-[1rem] text-[3rem]'>Beautiful homes made for you</h1>
                  <GradientLine/>
                  <p className='text-[.8rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi corrupti aperiam eos corporis natus officia architecto molestias deserunt quibusdam! Aliquid quam impedit fugiat quidem laborum?</p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='w-[70%] bg-white py-[1rem] px-[.5rem] absolute bottom-[0%] border-b-2'>
                  <a href="" className='text-black font-semibold'>See all listing <span className='text-[#FFAC12]'>➛</span></a>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Hero