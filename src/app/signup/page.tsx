"use client"

import Link from 'next/link'
import { useState } from 'react';
import Button from '../home/ui/Button';


export default function SignUp() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <div className='max-w-[1440px] mx-auto'>
      <nav  className="flex justify-between md:mt-[52px] mt-9 w-[90%] mx-auto items-center" >
      <Link href="/" className="text-2xl font-extrabold text-bime-blue w-[231px]">
        Bime
      </Link>
        <div className="flex items-center gap-x-6 max-md:hidden">
            <p className="text-xs">Have an account? </p>
            <Link href={'/signup'} className='border-[0.4px] border-bime-blue py-[10px] px-6 rounded-[10px] text-bime-blue'>
                Log in
            </Link>
        </div>


        <div className='md:hidden cursor-pointer' onClick={toggleMobileMenu}>
          <img src='/images/Hamburger Menu.svg' alt="hamburger menu" />
        </div>
        
        <section
        className={`fixed top-0 bg-white shadow-xl w-[50%] h-full right-0 z-40 transform transition-transform duration-300 pt-5 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
      
        <span
          className="cursor-pointer text-2xl font-semibold pl-4"
          onClick={toggleMobileMenu}
        >
          x
        </span>
        <div className="flex-col inline-flex my-[50%] mx-[20%] gap-y-3">
          <Link href="/" className="text-2xl font-extrabold text-bime-blue text-center">
            Bime
          </Link>
       
           <Link href={'/login'} className="border-[0.3px] text-[#282829] py-2 px-4 rounded-[10px] bime-black text-center text-xs  transition-colors duration-300 text-nowrap">
             Login
            </Link>
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

<div className="grid items-center xl:grid-cols-2 w-[90%] mx-auto max-xl:mt-20">
    <div className="relative max-xl:hidden"> 
        
        <img src='/images/Group 29.png' alt="pink" className="absolute right-[15%] bottom-[6%] z-20" />
        <img src='/images/Group 31.svg' alt="light" className="absolute top-[40%] left-[10%]" />
        <img src= '/images/Group 30.svg' alt="stats" className="absolute right-[10%] top-[20%]" />
        <img src='/images/Ellipse 34.png' alt="ellipse" className="absolute right-[28%] top-[18%] z-0" width={180} />
        <img src='/images/businessman-sitting-on-office-chair-2873063-2384315@0 1.png' alt="" className="relative z-10" />
    </div>
      <div className="w-full max-w-[545px] max-xl:mx-auto max-sm:w-[80%] max-sm:mx-auto">
        <h2 className="mb-6 text-gray-500 sm:text-[28px] sm:w-[80%] text-xl"><span className="font-semibold text-black">Sign up</span> for free and take your business higher</h2>
        <form className="flex flex-col sm:gap-y-9 gap-y-6">
          

            <input
            placeholder="Business or Organization Name *"
              type="text"
              className="block w-full px-6 sm:py-3 py-[6px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue max-sm:text-sm"
            />
       
         
         
            <input
            placeholder="Address *"
              type="text"
              className="block w-full px-6 sm:py-3 py-[6px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue max-sm:text-sm "
            />
            <input
            placeholder="Email *"
              type="email"
              className="block w-full px-6 sm:py-3 py-[6px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue max-sm:text-sm"
            />

            <input
            placeholder="Phone Number"
              type="text"
              className="block w-full px-6 sm:py-3 py-[6px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue max-sm:text-sm"
            />
        
          <button
            type="submit"
            className="w-full px-4 py-3 text-white rounded-md bg-bime-blue hover:bg-opacity-90"
          >
            Create account
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500">
          Have an account? <Link href='/login' className="font-semibold text-bime-blue hover:underline">Log in</Link>
        </div>
      </div>
    </div>
        
    </div>
  
  )
}