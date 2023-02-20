import React from 'react'
import Image from 'next/image'

import House1 from "../public/assests/House Example 1.png"
import bed from "../public/assests/Bed.svg";
import shower from "../public/assests/Shower.svg"
import size from "../public/assests/Size.svg"

const PlaceCard = () => {
  return (
    <div>
        <div>
        <Image  src={House1} width="100%" height="100%" alt="houseimg"/>

        </div>
        <div>
            <h2 className='font-bold text-[1.6rem]'>Malto House</h2>

           <div className='flex gap-10 text-center'>
           <div className='text-center'>
                <span className=' '>4</span>
                <Image src={bed} height={20} width={20} alt="bed"/>
            </div>

            <div>
                <span className='text-center'>4</span>
                <Image src={shower} height={20} width={20} alt="bed"/>
            </div>

            <div>
                <span className='text-center'>4</span>
                <Image src={size} height={20} width={20} alt="bed"/>
            </div>

           </div>
        </div>
    </div>
  )
}

export default PlaceCard