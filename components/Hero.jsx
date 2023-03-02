import React from "react";
import Navbar from "./Navbar";
import GradientLine from "./GradientLine";

const Hero = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assests/background.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-screen bg-gradient-to-tr from-[#000000] to-[#00000034]">
        <div className="max-w-[90%] mx-auto">
          <div className="text-white">
            <Navbar />
            <div className="w-[50%] mt-[3rem]">
              <h1 className="font-bold text-6xl mb-[1rem] text-[3rem]">
                Beautiful homes made for you
              </h1>
              <GradientLine />
              <p className="text-[.8rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                corrupti aperiam eos corporis natus officia architecto molestias
                deserunt quibusdam! Aliquid quam impedit fugiat quidem laborum?
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[70%] bg-white py-[1rem] px-[.5rem] absolute bottom-[0%] border-b-2">
              <a href="" className="text-black font-semibold">
                See all listing <span className="text-[#FFAC12]">➛</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
