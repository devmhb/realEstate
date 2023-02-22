import React from 'react'
import Image from 'next/image'
import  ClientImg from "../public/assests/Oval.png"
import GradientLine from './GradientLine'

const Client = () => {
  return (
    <div className='flex flex-col items-center'>
        <div>
        <GradientLine/>
        <p className='mb-[1rem]'>“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”</p>
        </div>
    <div className='flex items-center'>
        <Image src={ClientImg} width={50} height={50} alt="client" />
        <div>
            <h3 className='text-black text-[.8rem] font-bold'>Lara Madriga</h3>
            <p className='text-[.9rem]'>Client</p>
        </div>
    </div>
    </div>
  )
}

export default Client