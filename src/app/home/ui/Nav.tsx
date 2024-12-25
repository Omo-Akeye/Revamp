"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

interface NavProps {
  setOpenPop: (value: boolean) => void;
  openOverPop: boolean;
  onPricingClick: () => void;
  onAboutUsClick: () => void;
}

export default function Nav({ setOpenPop, openOverPop, onPricingClick, onAboutUsClick }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleNavClick = (action: () => void) => {
    action();
    toggleMobileMenu();
  };
  return (
    <nav className="flex justify-between md:mt-[52px] mt-9 w-[90%] mx-auto items-center">
      <Link href="/" className="text-2xl font-extrabold text-bime-blue w-[231px]">
        Bime
      </Link>
      <div className="">
        <ul className="flex items-center text-lg text-[#282829] gap-x-7 max-lg:hidden">
          <li className="flex items-center gap-x-[6px] cursor-pointer" onClick={()=>setOpenPop(!openOverPop)}>
            Discount offer
            <span className="bg-[#CCEEFF] text-bime-blue px-2 py-1 rounded-md flex text-[10px] font-bold" >
              <img src="/images/gift-box-4027302-3328590 2.svg" alt="gift" />
              30% off
            </span>
          </li>
          <li className="cursor-pointer" onClick={onPricingClick}>Pricing</li>
          <li className="cursor-pointer" onClick={onAboutUsClick}>About us</li>
        </ul>
      </div>

      <div className="inline-flex gap-x-[120px]">
        <div className="inline-flex items-center text-sm font-semibold gap-[10px] max-lg:hidden">

             <Link href={'/login'} className="border-[0.3px] text-[#282829] py-3 px-7 rounded-[10px] bime-black hover:bg-[#EAEAEA] hover:border-black">
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
        className={`fixed top-0 bg-white shadow-xl w-[65%] sm:w-1/2 h-full right-0 z-40 transform transition-transform duration-300 pt-5 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span
          className="cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <img src="/images/Close Circle.svg" width={24} className="ml-[10%]"/>
        </span>
        <main className="flex flex-col justify-between h-[60%] mt-28 mr-7">
          <div className="flex flex-col items-end space-y-7">
            <span 
              className="space-y-3 cursor-pointer" 
              onClick={() => handleNavClick(() => setOpenPop(!openOverPop))}
            >
              <p>Discount offer</p>
              <span className="bg-[#CCEEFF] text-bime-blue px-2 py-1 rounded-md flex font-bold items-center" >
                <img src="/images/gift-box-4027302-3328590 2.svg" alt="gift" width={18} />
                30% off
              </span>
            </span>
            <span 
              onClick={() => handleNavClick(onPricingClick)} 
              className="cursor-pointer"
            >
              Pricing
            </span>
            <span 
              onClick={() => handleNavClick(onAboutUsClick)} 
              className="cursor-pointer"
            >
              About us
            </span>
          </div>
          <div className="flex-col inline-flex gap-y-3 items-end">
            <Link 
              href={'/login'} 
              className="border-[0.3px] text-[#282829] py-2 px-6 rounded-[10px] bime-black text-center transition-colors duration-300 text-nowrap hover:bg-[#EAEAEA] hover:border-black"
              onClick={toggleMobileMenu}
            >
              Login
            </Link>
            <Link  
              href="/signup" 
              className="bg-[#329ACF] hover:bg-[#38BCFF] text-white transition-colors duration-300 font-semibold px-7 py-[13px] rounded-lg"
              onClick={toggleMobileMenu}
            >
              Get started
            </Link>
          </div>
        </main>
      </section>
    </nav>
  );
}
