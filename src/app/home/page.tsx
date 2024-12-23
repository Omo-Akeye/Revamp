"use client";

import { useRef,useState } from "react";
import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import Business from "./ui/Business";
import Cards from "./ui/Cards";
import Why from "./ui/Why";
import Growth from "./ui/Growth";
import Features from "./ui/Features";
import PricingCards from "./ui/PricingCards";
import GoodBye from "./ui/GoodBye";
import Button from "./ui/Button";
import Link from "next/link";

export default function MainPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);
  const [openOverPop,setOpenPop] = useState<boolean>(false)
  // function TogglePopOver (){
  //   setOpenPop(!opne)
  // }

  const scrollToCards = () => {
    const offset = 50;
    const element = cardsRef.current;
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  

  const scrollToBusiness = () => {
    const offset = 10;
    const element = businessRef.current;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="max-w-[1440px] h-screen mx-auto relative">
      <Nav onPricingClick={scrollToCards} onAboutUsClick={scrollToBusiness}   openOverPop={openOverPop} 
        setOpenPop={setOpenPop} />

      
          <div  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 transition-all duration-300 ease-in-out"
          style={{
            opacity: openOverPop ? 1 : 0,
            visibility: openOverPop ? 'visible' : 'hidden'
          }}>
          <section
             className="max-w-[803px] grid grid-cols-2 bg-white px-10 py-16 rounded-2xl items-center gap-5 relative transform transition-transform duration-300 ease-in-out"
             style={{
               transform: openOverPop ? 'scale(1)' : 'scale(0.95)'
             }}>
           
            <div>
              <h1 className="text-[38px] font-bold tracking-[-6%] leading-10">Exclusive offer 
              for you - <span className="text-bime-blue">Save 30% </span></h1>
              <p className="text-sm my-6 text-[#000000]">Automate, organize, and take full charge of your finances at 30% off regular price for the first three months.  Don’t wait, take advantage now!</p>
              <Link href="/signup" className="duration-300 text-nowrap bg-[#329ACF] hover:bg-bime-blue text-white text-xs font-semibold px-[14px] py-[12px] rounded-md">Claim your offer now</Link>
          
            </div>
             <div>
             <img src="/images/pop-image.svg" width={332} alt="popover"/>
             <img src="/images/Close Circle.svg" className="absolute top-6 right-6 cursor-pointer" width={16} alt="close"
             onClick={()=>setOpenPop(!openOverPop)}/>
             </div>
          </section>
        </div>
     

     


      <div className="md:h-[90vh] md:flex md:justify-center md:relative">
        <Hero />
      </div>
      <div ref={businessRef}>
        <Business />
      </div>

      
        <Cards />
      
      <Why />
      <Growth />
      <Features />
      <div ref={cardsRef}>
      <PricingCards />
      </div>
     
      <GoodBye />
    </div>
  );
}
