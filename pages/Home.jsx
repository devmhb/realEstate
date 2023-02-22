import React from 'react'
import Hero from "../components/Hero"
import GoodHand from '../components/GoodHand'
import Place from '../components/Place'
import GoodHandB from '../components/GoodHandB'
import Review from '../components/Review'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className='container flex items-center justify-center  bg-[#ffffffa9] '>
        <div className='max-w-[90%] '>
          <div>
            <Hero/>
          <div>
            <GoodHand row="flex-row"/>
          </div>
          <div >
            <Place/>
            </div>
            <div>
            <GoodHand row="flex-row-reverse"/>
            </div>
            <div>
              <GoodHandB/>
            </div>
            <div>
              <Review/>
            </div>
            <div>
              <Footer/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home