import React from 'react'
import Nav from './ui/Nav'
import Hero from './ui/Hero'
import Business from './ui/Business'
import Cards from './ui/Cards'
import Why from './ui/Why'
import Growth from './ui/Growth'
import Features from './ui/Features'
import PricingCards from './ui/PricingCards'
import GoodBye from './ui/GoodBye'

export default function MainPage() {
  return (
    <div className="max-w-[1440px] h-screen mx-auto">
        <Nav/>
        <div className="md:h-[90vh] md:flex md:justify-center md:relative">
        <Hero/>
        </div>
        <Business/>
        <Cards/>
        <Why/>
        <Growth/>
        <Features/>
        <PricingCards/>
        <GoodBye/>
      
    </div>
  )
}

