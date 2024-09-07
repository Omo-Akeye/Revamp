import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Business from './components/Business'
import Cards from './components/Cards'
import Why from './components/Why'
import Growth from './components/Growth'
import Features from './components/Features'
import PricingCards from './components/PricingCards'
import GoodBye from './components/GoodBye'

export default function MainPage() {
  return (
    <div className="w-full h-screen">
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

