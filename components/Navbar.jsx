import React from 'react'
import Image from 'next/image'

import Button from './Button'

import Logo from "../public/assests/Logo RealEstate.svg"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center min-h-[70px]'>
        <div>
            <Image src={Logo} height={80} width={80}/>
        </div>
        <div className='flex items-center gap-5'>
        <ul className='flex justify-evenly items-center gap-5 cursor-pointer text-[.8rem]'>
            <li >Nav Link</li>
            <li>Nav Link</li>
            <li>Nav Link</li>
            <li>Nav Link</li>
            <li>Nav Link</li>
        </ul>
        <div>
    <Button clr="text-[black]" bgcolor="bg-[#FFAC12]">Work with us <span className='text-white'>➛</span> </Button>
    </div>
    </div>
    </div>
  )
}

export default Navbar