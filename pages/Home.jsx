import React from 'react'
import Hero from "../components/Hero"
import GoodHand from '../components/GoodHand'
import Place from '../components/Place'

const Home = () => {
  return (
    <div className='container  bg-[#ffffffa9] '>
        <div className='max-w-[80%] m-[auto]'>
          <div>
            <Hero/>
          <div>
            <GoodHand/>
          </div>
            <Place/>
          </div>
        </div>
    </div>
  )
}

export default Home