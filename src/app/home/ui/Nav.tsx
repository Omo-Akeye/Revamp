"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between md:mt-[52px] mt-9 w-[90%] mx-auto items-center">
      <Link href="/" className="text-2xl font-extrabold text-bime-blue w-[231px]">
        Bime
      </Link>

 

      <div className="">
        <ul className="flex items-center text-lg text-[#282829] gap-x-7 max-lg:hidden">
          <li className="flex items-center gap-x-[6px] cursor-pointer">
            Discount offer
            <span className="bg-[#CCEEFF] text-bime-blue px-2 py-1 rounded-md flex text-[10px] font-bold">
              <img src="/images/gift-box-4027302-3328590 2.svg" alt="gift" />
              30% off
            </span>
          </li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">About us</li>
        </ul>
      </div>

      <div className="inline-flex gap-x-[120px]">
        <div className="inline-flex items-center text-sm font-semibold gap-[10px] max-lg:hidden">

             <Link href={'/login'} className="border-[0.3px] text-[#282829] py-3 px-7 rounded-[10px] bime-black">
             Login
             </Link>
             <Link href={'/signup'} className="text-white font-semibold bg-[#329ACF] py-3 px-9 rounded-[10px] hover:bg-[#38BCFF]">
             Get Started
             </Link>
         
       

      </div>

      </div>

    

   
      <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <img src="/images/Hamburger Menu.svg" alt="hamburger menu" />
      </div>

      
      <section
        className={`fixed top-0 bg-white shadow-xl w-[50%] h-full right-0 z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
      
        <span
          className="cursor-pointer text-2xl font-semibold"
          onClick={toggleMobileMenu}
        >
          x
        </span>
        <div className="flex-col inline-flex my-[50%] mx-[20%] gap-y-6">
          <Link href="/" className="text-2xl font-extrabold text-bime-blue">
            Bime
          </Link>
          <Button
            label="Log in"
            href="/login"
            bgColor="transparent"
            textColor="#282829"
            border="0.3px solid #282829"
            width="auto"
            height="auto"
            hoverBgColor="#EAEAEA"
          />
          <Button
            label="Get started"
            href="/"
            bgColor="#329ACF"
            textColor="white"
            width="auto"
            height="auto"
            hoverBgColor="#38BCFF"
          />
        </div>
      </section>
    </nav>
  );
}
