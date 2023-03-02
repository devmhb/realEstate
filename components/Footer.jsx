import React from "react";
import Button from "./Button";
import logo from "../public/assests/Logo RealEstate.svg";
import Image from "next/image";
import FB from "../public/assests/fb.png";
import Twitter from "../public/assests/Twiteer.png";
import Instagram from "../public/assests/instagram.png";

const Footer = () => {
  return (
    <div className="h-[auto] bg-gradient-to-bl from-[#271800]  to-[#000] text-white px-[3rem] py-[3rem] flex flex-col justify-center gap-4">
      <div className="max-w-[90%]">
        <div className="flex justify-between pb-[1rem] border-b-[2px] border-dotted border-[#271800]">
          <h2 className="text-[1.8rem]">
            Make your dream a <span className="text-[#FFAC12]"> reality</span>
          </h2>
          <Button clr="text-[black]" bgcolor="bg-[#FFAC12]">
            Work with us <span className="text-white">➛</span>{" "}
          </Button>
        </div>
        <div className="flex justify-between">
          <div>
            <Image src={logo} height={80} width={80} alt="logo" />
            <div className="flex gap-[1rem] mt-2">
              <Image src={FB} height={0} width={0} alt="icon" />
              <Image src={Twitter} height="100%" width="100%" alt="icon" />
              <Image src={Instagram} height="100%" width="100%" alt="icon" />
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-bold">Quick Links</h4>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Properties</a>
            <a href="">FAQ</a>
          </div>
          <div className="flex flex-col">
            <h4>Column Heading</h4>
            <a href="">Link goes here</a>
            <a href="">Link goes here</a>
            <a href="">Link goes here</a>
            <a href="">Link goes here</a>
          </div>
          <div className="flex flex-col">
            <h4>Subscribe for Newsletter</h4>
            <input
              type="email"
              placeholder="your email"
              className="focus:outline-none border-[1px] text-black px-[1rem] py-[.5rem]"
            />
            <button className="bg-white text-black mt-[.2rem] w-[50%] m-auto ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
