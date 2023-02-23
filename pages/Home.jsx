import React from 'react'
import Hero from "../components/Hero"
import GoodHand from '../components/GoodHand'
import Place from '../components/Place'
import GoodHandB from '../components/GoodHandB'
import Review from '../components/Review'
import Footer from '@/components/Footer'
import contentImg from "../public/assests/content.png";
import contentImg2 from "../public/assests/Rectangle.png";

const Home = () => {
  return (
    <div className='container min-w-[100%] flex items-center justify-center'>
        <div>
          <div>
            <Hero/>
          <div>
            <GoodHand row="flex-row" padding="pr-[3.2rem]" contentImg={contentImg}/>
          </div>
          <div >
            <Place/>
            </div>
            <div>
            <GoodHand row="flex-row-reverse" padding="pl-[3.2rem]" contentImg={contentImg2}/>
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