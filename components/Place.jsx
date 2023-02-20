import React from 'react'

import PlaceCard from './PlaceCard'
import GradientLine from './GradientLine'


const Place = () => {
  return (
    <div className='bg-[#F7F3F2] m-[auto]'>
        <GradientLine/>
        <h2 className='font-bold text-[2rem]'>Find your next place to live</h2>
        <div className='flex justify-start items-baseline border-r-3 rounded-lg'>
            <div className='px-[1rem] py-[1rem] bg-[white] border-r-2'>
                <select name="" id="" className=':focus outline-none border-none cursor-pointer rounded-l-[1rem]'>
                    <option value="" className=' b-[none] '>Looking for</option>
                    <option value="">Flat</option>
                </select>
            </div>
            <div className='px-[1rem] py-[1rem] bg-[white] border-r-2'>
                <select name="" id="" className=' :focus outline-none cursor-pointer'>
                    <option value="">Location </option>
                    <option value="">U.S.A</option>
                    <option value="">U.A.E</option>
                </select>
            </div>
            <div className='px-[1rem] py-[1rem] bg-[white] '>
                <select name="" id="" className=':focus outline-none border-none cursor-pointer'>
                    <option value="">Property type</option>
                    <option value="">Rent</option>
                    <option value="">Buy</option>
                </select>
            </div>   
        </div>

       <div className='flex justify-around items-center flex-wrap'>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
       </div>
    </div>
  )
}

export default Place