import React from 'react'
import GradientLine from './GradientLine'
import Button from './Button'

const GoodHandB = () => {
  return (
    <div className='h-[auto] bg-gradient-to-tr from-[#271800]  to-[#000] text-white px-[3rem] py-[3rem] flex flex-col justify-center items-center gap-4'>
        <GradientLine/>
        <h2 className='text-[2rem]'>You're in good hands</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia esse at ab hic eveniet, assumenda modi. Vero nam iusto dignissimos saepe recusandae voluptates architecto asperiores praesentium, eum exercitationem veniam quae?</p>
        <Button clr="text-[black]" bgcolor="bg-[#FFAC12]">Learn more <span className='text-white'>➛</span> </Button>
    </div>
  )
}

export default GoodHandB