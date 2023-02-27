import React from 'react'
import Image from 'next/image'
import GradientLine from './GradientLine'
import Button from './Button'

const GoodHand = ({row, contentImg, padding }) => {
  return (
    <div className={` w-[100%] bg-white pt-[5rem] flex ${row} items-center justify-center m-[auto] pb-[3rem]`}>
       <div className=''>
        <Image src={contentImg} width={"100%"} height={"100%"} alt="contentimg"/>
       </div>
        <div className={`w-fit ${padding}`}>
            <GradientLine/>
            <h2 className='font-bold text-[2rem]'>You’re in good hands</h2>
            <p className='text-[.8rem] mt-3 mb-3'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
            <Button  bgcolor="bg-black" clr="text-white">Learn more <span className=''>➛</span></Button>
        </div>
    </div>
  )
}

export default GoodHand