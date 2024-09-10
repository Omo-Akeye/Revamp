"use client";

import { useState, useEffect } from 'react';

const cards = [
  {
    heading: 'Online Vendors',
    src: '/images/shopping-app.png',
    hoverSrc: '/images/shopping-app-6866298-5628343 1.png',
    description: 'Vendors who are selling products without physical shop can record their sales and expenses generate a receipt and share it to their customer',
  },
  {
    heading: 'Retailers',
    src: '/images/shopping-store-4809880-3997871 1.png',
    hoverSrc: '/images/shopping-store.png',
    description: 'Retailers can add salesmen who will record sales from the inventory issue receipt and can also input the expenses of the day',
  },
  {
    heading: 'Business firms',
    src: '/images/office-building-5560711-4632487 1.png',
    hoverSrc: '/images/office-buildin.png',
    description: 'Managers of companies and business get a way of tracking their sales or income and view company growth easily',
  },
];

export default function Cards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 780);
    };

    handleResize(); // Initialize state based on initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (index: any) => {
    if (!isSmallScreen) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='flex max-lg:flex-col lg:justify-between xl:w-[80%] w-[80%] mx-auto gap-x-7 mt-20 max-lg:gap-y-7 max-lg:items-center'>
      {cards.map((card, index) => (
        <div
          key={index}
          className='bg-[#F7F7F7] md:rounded-[20px] rounded-2xl md:px-10 px-3 py-5 text-center transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer max-w-[367px]'
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={isSmallScreen ? card.hoverSrc : (hoveredIndex === index ? card.hoverSrc : card.src)}
            alt={card.heading}
            className='transition-opacity duration-300 ease-in-out max-md:w-52 mx-auto'
          />
          <h1 className='text-2xl font-medium md:my-6 my-4'>{card.heading}</h1>
          <p className=''>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
