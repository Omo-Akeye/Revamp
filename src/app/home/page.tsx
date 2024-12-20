"use client";

import { useRef } from "react";
import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import Business from "./ui/Business";
import Cards from "./ui/Cards";
import Why from "./ui/Why";
import Growth from "./ui/Growth";
import Features from "./ui/Features";
import PricingCards from "./ui/PricingCards";
import GoodBye from "./ui/GoodBye";

export default function MainPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);

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
      <Nav onPricingClick={scrollToCards} onAboutUsClick={scrollToBusiness} />
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
