import React from 'react'
import Image from 'next/image'

import House1 from "../public/assests/House Example 1.png"
import bed from "../public/assests/Bed.svg";
import shower from "../public/assests/Shower.svg"
import size from "../public/assests/Size.svg"

const PlaceCard = () => {
  return (
    <div className='flex flex-col flex-wrap items-center bg-white mt-[2rem] rounded-t-3xl max-w-[30%]'>
        <div>
        <Image  src={House1} width="90%" height="90%" alt="house img"/>

        </div>
        <div>
            <h2 className='font-bold text-[1.2rem]'>Malto House</h2>

           <div className='text-center w-[100%] flex flex-row justify-between border-t-[1px] border-black'>
              <div className=''>
                    <span className=' '>4</span>
                    <Image src={bed} height={15} width={15} alt="bed"/>
                </div>

                <div>
                    <span className='text-center'>4</span>
                    <Image src={shower} height={15} width={15} alt="bed"/>
                </div>

                <div>
                    <span className='text-center'>4</span>
                    <Image src={size} height={15} width={15} alt="bed"/>
                </div>

           </div>
        </div>
    </div>
  )
}

export default PlaceCard