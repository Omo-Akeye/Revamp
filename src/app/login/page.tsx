"use client"

import Link from "next/link";
import { useState } from "react";
import Button from "../home/ui/Button";



export default function Login() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <div className="max-w-[1440px] mx-auto"> 
        <nav  className="flex justify-between md:mt-[52px] mt-9 w-[90%] mx-auto items-center" >
      <Link href="/" className="text-2xl font-extrabold text-bime-blue w-[231px]">
        Bime
      </Link>
        <div className="flex items-center gap-x-6 max-lg:hidden">
            <p className="text-xs">Don’t have an account?</p>
            <Link href='/signup' className='border-[0.4px] border-bime-blue py-[10px] px-6 rounded-[10px] text-bime-blue'>
                Create account 
            </Link>
         
        </div>
        <div className='lg:hidden cursor-pointer'  onClick={toggleMobileMenu}>
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
        <div className="flex items-center justify-center max-[340px]:h-full h-[80vh]">
        <div className="md:w-full w-[80%] mx-auto max-w-lg max-[330px]:mt-7">
        <h2 className="mb-10 md:text-2xl text-xl md:text-center text-gray-500  md:w-[50%] w-[70%] max-[340px]:w-[80%] md:mx-auto"> <span className="font-semibold text-black">Log in </span>with your details to continue</h2>
        <form >
         
            <input
             placeholder="Business/Staff ID *"
              type="text"
              className="block w-full px-3 py-[10px]  border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />
       
        
            <input
            placeholder="Password *"
              type="password"
              className="block w-full px-3 py-[10px] md:mt-10 mt-[30px] border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />
          <div className="flex items-center justify-end mt-[11px] mb-[22px]">
            <a href="#" className="text-sm text-bime-blue hover:underline font-semibold">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full px-[18px] py-3 font-semibold text-white bg-[#329ACF] rounded-md hover:opacity-90"
          >
            Log in
          </button>
        </form>
        <div className="mt-5 text-center">
          Don’t have an account? <Link href='/signup'   className="font-medium text-bime-blue hover:underline">Create account</Link>
        </div>
      </div>
    </div>

    </div>

  )
}