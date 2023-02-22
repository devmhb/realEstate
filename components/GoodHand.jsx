import React from 'react'
import Image from 'next/image'
import GradientLine from './GradientLine'
import Button from './Button'

import contentImg from "../public/assests/content.png"
const GoodHand = ({row}) => {
  return (
    <div className={`bg-white pt-[5rem] flex ${row} items-center justify-center m-[auto] pb-[3rem]`}>
       <div className=''>
        <Image src={contentImg} width={"100%"} height={"100%"}/>
       </div>
        <div>
            <GradientLine/>
            <h2 className='font-bold text-[2rem]'>You’re in good hands</h2>
            <p className='text-[.8rem]'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
            <Button  bgcolor="bg-black" clr="text-white">Learn more <span className=''>➛</span></Button>
        </div>
    </div>
  )
}

export default GoodHand