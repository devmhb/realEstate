import React from "react";
import Image from "next/image";
import Button from "./Button";
import Logo from "../public/assests/Logo RealEstate.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center min-h-[70px]">
      <Link href="/">
        <Image src={Logo} height={80} width={80} alt="logo" />
      </Link>
      <div className="flex items-center gap-5">
        <ul className="flex justify-evenly items-center gap-5 cursor-pointer text-[.8rem]">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="buy">
            <li>Properties</li>
          </Link>
          <Link href="/buy">
            <li>Buy</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="faq">
            <li>FAQ</li>
          </Link>
        </ul>
        <div>
          <Link href="/workwith">
            <Button clr="text-[black]" bgcolor="bg-[#FFAC12]">
              Work with us <span className="text-white">➛</span>{" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
