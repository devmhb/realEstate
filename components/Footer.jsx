import React from 'react'
import Button from './Button'
import logo from "../public/assests/Logo RealEstate.svg"
import Image from 'next/image'
import FB from "../public/assests/fb.png"
import Twitter from "../public/assests/Twiteer.png"
import Instagram from "../public/assests/instagram.png"

const Footer = () => {
  return (
    <div className=' h-[auto] bg-gradient-to-bl from-[#271800]  to-[#000] text-white px-[3rem] py-[3rem] flex flex-col justify-center items-center gap-4'>
        <div>
            <h2>Make your dream a <span className='text-[#FFAC12]'> reality</span></h2>
            <Button clr="text-[black]" bgcolor="bg-[#FFAC12]">Work with us <span className='text-white'>➛</span> </Button>
        </div>
        <div className='flex items-center justify-between'>
            <div>
                <Image src={logo} height="100%" width="100%" alt="logo"/>
                <div className='flex gap-[1rem] mt-2'>
                    <Image src={FB}  height="100%" width="100%" alt="icon"/>
                    <Image src={Twitter}  height="100%" width="100%" alt="icon"/>
                    <Image src={Instagram}  height="100%" width="100%" alt="icon"/>
                </div>
            </div>
            <div >
                <h4>Column Heading</h4>
                <a href="">Link </a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </div>
            <div>
                <h4>Column Heading</h4>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </div>
            <div>
                <h4>Column Heading</h4>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </div>
        </div>
    </div>
  )
}

export default Footer